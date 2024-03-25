/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import closeBtn from "../../assets/general-icons/close-btn/close-btn-mobile.svg";

import { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { ModalContext } from "../../contexts/ModalContext";
import { SectionModal, StyledForm, StyledModalBox } from "./style";

const ModalContact = () => {
    const { setIsOpen } = useContext(ModalContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        const serviceId = "service_40yvqob";
        const templateId = "template_onp07ec";
        const publicKey = "Hsv-8ZrBgMK2CEWrj";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Gabriel Montenegro",
            message: message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setName("");
                setEmail("");
                setMessage("");

                const botao = document.getElementById("sendBtn");
                botao!.innerText = "Email Enviado!";

                setTimeout(() => {
                    // alert(`Email enviado com sucesso, ${name}`);
                    handleCloseModal();
                }, 2000);
            })
            .catch((error) => {
                console.log("Erro ao enviar email", error);
            });
    };

    return (
        <>
            <StyledModalBox>
                <SectionModal>
                    <div>
                        <div>
                            <button onClick={handleCloseModal}>
                                <img src={closeBtn} alt="" />
                            </button>
                        </div>
                        <h2>FORMULÁRIO DE CONTATO</h2>
                        <StyledForm onSubmit={sendEmail} id="contat-form">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id=""
                                    placeholder="Digite sua mensagem"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <section>
                                <button id="sendBtn" type="submit">
                                    Enviar
                                </button>
                            </section>
                        </StyledForm>
                    </div>
                </SectionModal>
            </StyledModalBox>
        </>
    );
};

export { ModalContact };
