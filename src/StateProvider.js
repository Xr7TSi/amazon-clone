import React, { createContext, useContext, useReducer } from "react";

// creates data layer
export const StateContext = createContext();


// provides data layer to all components in the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pulls info from the data layer
export const useStateValue = () => useContext(StateContext);