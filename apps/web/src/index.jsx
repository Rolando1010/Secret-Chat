import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Routes from "./routes";
import context from './context';
import useGlobalState from './hooks/useGlobalState';
import "./styles/app.module.css";
import Menu from './components/menu';
import useTheme from './hooks/useTheme';

const App = () => {
    const { startGlobalState } = useGlobalState();
    const { setInitialTheme } = useTheme();
    const [globalState, setGlobalState] = useState();
    const valueGlobalState = useMemo(() => ({ globalState, setGlobalState }), [globalState]);

    useEffect(() => {
        startGlobalState(setGlobalState);
        setInitialTheme();
    }, []);

    return (
        <context.Provider value={valueGlobalState}>
            <Router>
                <Menu/>
                <Routes/>
            </Router>
        </context.Provider>
    );
}

createRoot(document.getElementById('root')).render(<App/>);