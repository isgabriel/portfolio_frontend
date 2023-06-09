interface iMenuContext {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    handleMenu: () => void;
}

export type { iMenuContext };
