import { useContext } from "react";
import context from "../context";
import { getAuth } from '../../../auth';
import * as request from "../utils/requests";

const useGlobalState = () => {
    const { globalState, setGlobalState } = useContext(context) || {};

    const startGlobalState = async (externalSetGlobalState) => {
        const authtoken = getAuth();
        let userdata;
        if(authtoken){
            userdata = (await request.get("/api/user/basic-data")).userdata;
        }
        (setGlobalState || externalSetGlobalState)({
            auth: {
                userdata,
                isAuth: Boolean(userdata)
            }
        });
    }

    return {
        globalState,
        setGlobalState,
        startGlobalState
    }
}

export default useGlobalState;