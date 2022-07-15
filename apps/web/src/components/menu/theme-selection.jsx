import { useState } from "react";
import Switch from "react-switch";
import styles from "../../styles/components/menu.module.css";
import useTheme from "../../hooks/useTheme";
import { dark, light } from "../../styles/themes"; 

const ThemeSelection = () => {
    const { isInitialTheme, changeTheme } = useTheme();
    const [checked, setChecked] = useState(isInitialTheme);

    const handleChange = (isChecked) => {
        setChecked(isChecked);
        changeTheme(isChecked);
    }

    return (
        <Switch
            onChange={handleChange}
            checked={checked}
            checkedIcon={<i className={`fas fa-moon ${styles.switchIcon}`}></i>}
            uncheckedIcon={<i className={`fas fa-sun ${styles.switchIcon}`}></i>}
            className={styles.switch}
            onColor={dark["secondary-1"]}
            offColor={light["secondary-1"]}
        />
    );
}

export default ThemeSelection;