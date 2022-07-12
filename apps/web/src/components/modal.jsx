import { useState, useEffect } from "react";
import Button from "./button";
import styles from "../styles/components/modal.module.css";

const Modal = ({ modalRef = {}, title, footer, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const open = () => {
        setIsOpen(true)
        document.querySelector("#root").style.overflowY = "initial";
    }

    const close = () => {
        document.querySelector("#root").style.overflowY = "auto";
        setIsOpen(false);
    }

    useEffect(() => {
        modalRef.close = close;
        modalRef.open = open;
    }, []);

    if(!isOpen) return <></>;
    return (
        <div className={styles.modal}>
            <section>
                <header>
                    {title || <p></p>}
                    <button onClick={close}>
                        <i className="fas fa-times"></i>
                    </button>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    {footer}
                    <Button type="light" onClick={close} styles="margin-left: 15px;">Cerrar</Button>
                </footer>
            </section>
        </div>
    );
}

export default Modal;