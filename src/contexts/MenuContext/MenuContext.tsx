/* eslint-disable no-constant-condition */
import { createContext, useState, useEffect } from "react";

import { iMenuContext } from "./type";

const MenuContext = createContext({} as iMenuContext);

const MenuProvider = ({ children }: { children: JSX.Element }) => {
    const [menu, setMenu] = useState(false);
    const handleMenu: () => void = () => {
        setMenu(!menu);
    };

    return (
        <MenuContext.Provider value={{ menu, setMenu, handleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export { MenuContext, MenuProvider };
