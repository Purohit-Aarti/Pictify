import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => { 
    const [user, setUser] = useState(null);

    const value = {
        user, setUser
    };

    return (
        <AppContext.Provider value = {value}>
            {props.children}
        </AppContext.Provider>
    );
}


export default AppContextProvider; // default export
export {AppContext}; // named export