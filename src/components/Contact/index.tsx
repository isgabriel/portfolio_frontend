import { useContext } from "react";
import { SectionTitleBig } from "../../styles/sections";
import { SocialLinksMenu } from "../SocialLinksMenu";
import { ModalContext } from "../../contexts/ModalContext";

import {
    ButtonOpenModal,
    DivContactDescAndSocials,
    FifthScreenSection,
} from "./style";
import { ModalContact } from "../ModalContact";

const Contact = () => {
    const { setIsOpen } = useContext(ModalContext);
    return (
        <FifthScreenSection id="contact">
            {/* {isOpen && <ModalContact />} */}

            <div>
                <DivContactDescAndSocials>
                    <SectionTitleBig>CONTATO</SectionTitleBig>
                    <p>
                        Fique à vontade para me contatar em qualquer uma das
                        minhas redes sociais, ou preenchendo este{" "}
                        <ButtonOpenModal onClick={() => setIsOpen(true)}>
                            FORMULÁRIO
                        </ButtonOpenModal>
                        .
                    </p>
                </DivContactDescAndSocials>
                <SocialLinksMenu />
            </div>
        </FifthScreenSection>
    );
};

export { Contact };
