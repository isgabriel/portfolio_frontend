import { SectionTitleBig } from "../../styles/sections";
import { SocialLinksMenu } from "../SocialLinksMenu";
import {
    ButtonOpenModal,
    DivContactDescAndSocials,
    FifthScreenSection,
} from "./style";

const Contact = () => {
    return (
        <FifthScreenSection>
            <div>
                <DivContactDescAndSocials>
                    <SectionTitleBig>CONTATO</SectionTitleBig>
                    <p>
                        Fique à vontade para me contatar em qualquer uma das
                        minhas redes sociais, ou preenchendo este{" "}
                        <ButtonOpenModal>FORMULÁRIO</ButtonOpenModal>.
                    </p>
                </DivContactDescAndSocials>
                <SocialLinksMenu />
            </div>
        </FifthScreenSection>
    );
};

export { Contact };
