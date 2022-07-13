import { useContext } from "react";
import context from "../context";
import * as request from "../utils/requests";

const useGlobalState = () => {
    const { globalState, setGlobalState } = useContext(context) || {};

    const startGlobalState = async (externalSetGlobalState) => {
        const auth = await request.get("/api/auth");
        (setGlobalState || externalSetGlobalState)({ auth });
    }

    return {
        globalState,
        setGlobalState,
        startGlobalState
    }
}

export default useGlobalState;