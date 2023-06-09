import closeBtn from "../../assets/general-icons/close-btn/close-btn-mobile.svg";

import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { SectionModal, StyledForm, StyledModalBox } from "./style";

const ModalContact = () => {
    const { setIsOpen } = useContext(ModalContext);
    return (
        <StyledModalBox>
            <SectionModal>
                <div>
                    <div>
                        <button onClick={() => setIsOpen(false)}>
                            <img src={closeBtn} alt="" />
                        </button>
                    </div>
                    <h2>FORMULÁRIO DE CONTATO</h2>
                    <StyledForm
                        action="https://formsubmit.co/itsgabrielmontenegro@gmail.com"
                        method="POST"
                    >
                        <input type="hidden" name="_captcha" value="false" />

                        <div>
                            <input
                                type="text"
                                placeholder="Nome"
                                name="Nome"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="Email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="Mensagem"
                                id=""
                                placeholder="Digite sua mensagem"
                                required
                            ></textarea>
                        </div>
                        <section>
                            <button type="submit">Enviar</button>
                        </section>
                    </StyledForm>
                </div>
            </SectionModal>
        </StyledModalBox>
    );
};

export { ModalContact };
