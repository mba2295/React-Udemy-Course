import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthenticationContext } from "./contexts/authenticationContext";

function App() {
  const authContext = useContext(AuthenticationContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authContext.isLoggedIn && <Login />}
        {authContext.isLoggedIn && <Home o />}
      </main>
    </React.Fragment>
  );
}

export default App;
