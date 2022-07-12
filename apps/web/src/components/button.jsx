import styles from "../styles/components/button.module.css";

const Button = ({ children, type, onClick }) =>
    <button
        onClick={onClick}
        className={`${styles.button} ${styles[type]}`}
    >{children}</button>

export default Button;