import styles from "../styles/components/dropdown.module.css";

const Dropdown = ({ className = "", toggle, overLineItems = [], underLineItems = [] }) =>
    <div className={`${styles.dropdown} ${className}`}>
        <span>{toggle}</span>
        <i className="fa-solid fa-caret-down"></i>
        <ul className={styles.dropdownContent}>
            <section className={styles.overLine}>
                {overLineItems.map((item, index) =>
                    <li key={`dropdown-over-item-${index}`}>{item}</li>
                )}
            </section>
            {!!underLineItems.length && <section className={styles.underLine}>
                {underLineItems.map((item, index) =>
                    <li key={`dropdown-under-item-${index}`}>{item}</li>
                )}
            </section>}
        </ul>
    </div>

export default Dropdown;