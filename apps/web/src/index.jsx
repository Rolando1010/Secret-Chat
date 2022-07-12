import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Routes from "./routes";
import context from './context';
import useGlobalState from './hooks/useGlobalState';
import "./styles/app.css";
import Menu from './components/menu';

const App = () => {
    const { startGlobalState } = useGlobalState();
    const [globalState, setGlobalState] = useState();
    const valueGlobalState = useMemo(() => ({ globalState, setGlobalState }), [globalState]);

    useEffect(() => { startGlobalState(setGlobalState); }, []);

    return (
        <context.Provider value={valueGlobalState}>
            <Router>
                <Menu/>
                <Routes/>
            </Router>
        </context.Provider>
    );
}

createRoot(document.getElementById('root')).render(<App />);