import { createContext, useState } from "react";
import { iModalContext, iModalProviderProps } from "./type";

const ModalContext = createContext({} as iModalContext);

const ModalProvider = ({ children }: iModalProviderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };
