import { historyContext } from "./historyContext";
import React, { useState } from "react";

const HistoryContextProvider = ({children}) => {
    
    const [historyData, setHistoryData] = useState()

    return(
        <historyContext.Provider value={{
            historyData, setHistoryData,
        }}>
            {children}
        </historyContext.Provider>
    )
}

export default HistoryContextProvider;