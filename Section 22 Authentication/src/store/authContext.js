import React, { useState, useCallback, useEffect } from "react";
let logoutTimer;

const AuthContext = React.createContext({
  isLoggedIn: false,
  accessToken: "",
  login: (accessToken, expiryTime) => {},
  logout: () => {},
});

const calculateRemainingTime = function (expiryTime) {
  const currentDateTime = new Date().getTime();
  const expiryDateTime = new Date(expiryTime).getTime();
  const remaingDuration = expiryDateTime - currentDateTime;
  return remaingDuration;
};

const getLocalAuthData = function () {
  const accessToken = localStorage.getItem("AccessToken");
  const expiryTime = localStorage.getItem("ExpiryTime");
  const remaingDuration = calculateRemainingTime(expiryTime);
  if (remaingDuration <= 60000) {
    //in milli seconds
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("ExpiryTime");
    return null;
  }
  return { accessToken, expiryTime: remaingDuration };
};

export const AuthContextProvider = (props) => {
  const authData = getLocalAuthData();
  let localToken;
  if (authData) {
    localToken = authData.accessToken;
  }
  const [accessToken, setAccessToken] = useState(localToken);
  const isLoggedIn = !!accessToken;

  const logoutHandler = useCallback(() => {
    setAccessToken(null);
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("ExpiryTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (accessToken, expiryTime) => {
    setAccessToken(accessToken);
    localStorage.setItem("AccessToken", accessToken);
    localStorage.setItem("ExpiryTime", expiryTime);
    const remaingDuration = calculateRemainingTime(expiryTime);
    logoutTimer = setTimeout(() => {
      logoutHandler();
    }, remaingDuration);
  };

  useEffect(() => {
    if (authData) {
      console.log(authData.expiryTime);
      logoutTimer = setTimeout(() => {
        logoutHandler();
      }, authData.expiryTime);
    }
  }, [authData, logoutHandler]);
  const contextValue = {
    isLoggedIn,
    accessToken,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
