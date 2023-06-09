interface iModalContext {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iModalProviderProps {
    children: React.ReactNode;
}

export type { iModalContext, iModalProviderProps };
