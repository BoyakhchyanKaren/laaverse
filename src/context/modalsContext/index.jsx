import { useContext, createContext, useState } from "react";

const ModalsContext = createContext();

export const useModalsContext = () => useContext(ModalsContext);

const ModalsContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalsContext.Provider
            value={{
                showModal, setShowModal
            }}
        >
            {children}
        </ModalsContext.Provider>
    )
}

export default ModalsContextProvider;