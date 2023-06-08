import { ThemeChangeProvider } from "./ThemeContext/ThemeContext";
import { MenuProvider } from "./MenuContext/MenuContext";
import { ModalProvider } from "./ModalContext";

const Providers = ({ children }: { children: JSX.Element }) => {
    return (
        <ThemeChangeProvider>
            <MenuProvider>
                <ModalProvider>{children}</ModalProvider>
            </MenuProvider>
        </ThemeChangeProvider>
    );
};
export { Providers };
