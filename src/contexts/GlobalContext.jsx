import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                isLoading, setIsLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;