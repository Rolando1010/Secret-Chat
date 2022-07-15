import { getCookie, setCookie } from "cookies-next";
import { useMemo } from "react";
import * as themes from "../styles/themes";

const DARK = "dark"
const LIGHT = "light";
const NAME_COOKIE_THEME = "theme";

const useTheme = () => {
    const isInitialTheme = useMemo(() => (getCookie(NAME_COOKIE_THEME) || DARK) === DARK, []);

    const changeTheme = (isInitialThemeSelected) => {
        const selectedTheme = isInitialThemeSelected ? DARK : LIGHT;
        setCookie(NAME_COOKIE_THEME, selectedTheme);
        setTheme(selectedTheme);
    }

    const setTheme = (selectedTheme) => {
        Object.entries(themes[selectedTheme]).forEach(([value, key]) => {
            document.documentElement.style.setProperty(`--${value}`, key);
        });
    }

    const setInitialTheme = () => {
        const selectedTheme = isInitialTheme ? DARK : LIGHT;
        setTheme(selectedTheme);
    }

    return {
        isInitialTheme,
        changeTheme,
        setTheme,
        setInitialTheme
    }
}

export default useTheme;