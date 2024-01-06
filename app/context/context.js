"use client";
import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
    const [name, setName] = useState('victor');
    const vee = 'victor'


    return (
        <GlobalContext.Provider value={{ name, setName, vee }}>
            {children}
        </GlobalContext.Provider>
    );
}