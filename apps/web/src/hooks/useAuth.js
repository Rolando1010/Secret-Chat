import { useNavigate } from 'react-router-dom';
import * as request from "../utils/requests";
import useGlobalState from './useGlobalState';
import { deleteAuth } from "../../../auth";

const useAuth = () => {
    const navigate = useNavigate();
    const { startGlobalState } = useGlobalState();

    const register = (credentials) => new Promise(resolve => {
        request.post("/api/register", credentials).then(({ success, message }) => {
            if(success) {
                startGlobalState();
                navigate("/");
            }
            resolve({success, message});
        });
    });

    const login = (credentials) => new Promise(resolve => {
        request.post("/api/login", credentials).then(({ success, message}) => {
            if(success){
                startGlobalState();
                navigate("/");
            }
            resolve({success, message});
        });
    });

    const logout = () => {
        deleteAuth();
        startGlobalState();
        navigate("/inicio-sesion");
    }

    return {
        register,
        login,
        logout
    };
}

export default useAuth;