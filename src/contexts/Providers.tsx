import { ThemeChangeProvider } from "./ThemeContext/ThemeContext";
import { MenuProvider } from "./MenuContext/MenuContext";

const Providers = ({ children }: { children: JSX.Element }) => {
    return (
        <ThemeChangeProvider>
            <MenuProvider>{children}</MenuProvider>
        </ThemeChangeProvider>
    );
};
export { Providers };
