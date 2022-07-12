import styles from "../styles/components/input.module.css";

const Input = ({ label, type, value, onChange, autoFocus }) =>
    <label className={styles.input}>
        <span>{label}</span>
        <input
            type={type}
            value={value}
            onChange={onChange}
            autoFocus={autoFocus}
        />
    </label>

export default Input;