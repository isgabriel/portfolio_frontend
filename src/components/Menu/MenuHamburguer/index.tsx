import { MenuParent, BigLine, SmallLine } from "./style";

const MenuHamburguer = () => {
    return (
        <MenuParent>
            <BigLine className="bigLine" />
            <SmallLine className="smallLine" />
            <BigLine className="bigLine" />
        </MenuParent>
    );
};
export { MenuHamburguer };
