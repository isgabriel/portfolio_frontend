/* eslint-disable @typescript-eslint/no-explicit-any */
import closeBtn from "../../assets/general-icons/close-btn/close-btn-mobile.svg";

import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ModalContext } from "../../contexts/ModalContext";
import { SectionModal, StyledForm, StyledModalBox } from "./style";

const ModalContact = () => {
    const { setIsOpen } = useContext(ModalContext);
    // const form = useRef();
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

        handleCloseModal();
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email enviado com sucesso", response);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log("Erro ao enviar email", error);
            });

        // emailjs
        //     .sendForm("service_40yvqob", "template_onp07ec", form.current, {
        //         publicKey: "Hsv-8ZrBgMK2CEWrj",
        //     })
        //     .then(
        //         () => {
        //             console.log("SUCCESS!");
        //         },
        //         (error: any) => {
        //             console.log("FAILED...", error.text);
        //         }
        //     );
    };

    return (
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
                                // name="user_name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                // name="user_email"
                                placeholder="Email"
                                value={email}
                                // name="user_name"
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
                                // name="user_name"
                                onChange={(e) => setMessage(e.target.value)}
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
