import { Routes as RoutesContainer, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Conversation from "./pages/conversation";

const Routes = () =>
    <RoutesContainer>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/inicio-sesion" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/conversaciones/:conversationName" element={<Conversation/>}/>
    </RoutesContainer>

export default Routes;