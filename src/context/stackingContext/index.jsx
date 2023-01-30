import { useContext, createContext, useState } from "react";

const StackingContext = createContext();

export const useStackingContext = () => useContext(StackingContext);

const StackingContextProvider = ({ children }) => {
    const [isLeaderBoardButtonClicked, setLeaderBoardButtonActive] = useState(false);

    return (
        <StackingContext.Provider
            value={{
                isLeaderBoardButtonClicked, setLeaderBoardButtonActive
            }}
        >
            {children}
        </StackingContext.Provider>
    )
}

export default StackingContextProvider;