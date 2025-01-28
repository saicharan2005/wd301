/* eslint-disable react-refresh/only-export-components */


import React, { createContext, useContext, useReducer } from "react";

import {
  reducer,
  initialState,
  MembersState,
  MembersActions,
} from "./reducer";

const MembersStateContext = createContext<MembersState | undefined>(
  undefined
);

type MembersDispatch = React.Dispatch<MembersActions>;

const MembersDispatchContext = createContext<MembersDispatch | undefined>(
  undefined
);



export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Here, I'll use the useReducer hook to manage state. I've passed the `reducer`
  // function and the `initialState` that I've defined in the reducer.ts file.

  const [state, dispatch] = useReducer(reducer, initialState);

  // Then, I'll pass the `state` object as value of this ProjectsStateContext

  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);



