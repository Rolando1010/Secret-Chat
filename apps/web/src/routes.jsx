import { Routes as RoutesContainer, Route, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Conversation from "./pages/conversation";
import useGlobalState from "./hooks/useGlobalState";

const Routes = () =>
    <RoutesContainer>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/inicio-sesion" element={<Login/>}/>
        <Route path="/" element={<AP><Home/></AP>}/>
        <Route path="/conversaciones/:conversationName" element={<AP><Conversation/></AP>}/>
    </RoutesContainer>

const AP = ({ children }) => {
    const { globalState } = useGlobalState();

    if(!globalState) return <></>;
    if(!globalState.auth.isAuth) return <Navigate to="/inicio-sesion"/>;
    return children;
}

export default Routes;