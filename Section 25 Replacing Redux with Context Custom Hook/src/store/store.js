import { useEffect, useState } from "react";

let globalState = {};
let listners = [];
let actions = {};
export const useStore = (shouldListen = true) => {
  const setGlobalState = useState(globalState)[1];

  useEffect(() => {
    if (shouldListen) {
      listners.push(setGlobalState);
    }

    return () => {
      if (shouldListen) {
        listners = listners.filter((l) => l !== setGlobalState);
      }
    };
  }, [setGlobalState, shouldListen]);

  const dispatch = (actionType, payload) => {
    const newState = actions[actionType](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listner of listners) {
      listner(globalState);
    }
  };
  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
