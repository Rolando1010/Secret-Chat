import { useNavigate } from 'react-router-dom';
import * as request from "../utils/requests";
import { getConversation, getExistingConversation } from "../services/chat";
import useGlobalState from "./useGlobalState";

const useConversation = () => {
    const { globalState, setGlobalState } = useGlobalState();
    const navigate = useNavigate();

    const updateGlobalConversation = (conversation) => setGlobalState({...globalState, conversation});

    const addConversationUser = async (conversationName) => {
        const { username } = globalState.auth.userdata;
        const { accesstoken } = await request.post(`/api/conversations/${conversationName}/join`);
        const conversation = await getConversation(conversationName, accesstoken);
        try{
            const participant = await conversation.getParticipantByIdentity(username);
            if(!participant) await conversation.add(username);
        }catch(error){
            try { await conversation.add(username); } catch {}
        }
        return conversation;
    }

    const getMyConversation = (conversationName) => {
        return new Promise((resolve, reject) => {
            request.get(`/api/user/accesstoken`).then(({ accesstoken }) => {
                getExistingConversation(conversationName, accesstoken)
                .then(resolve).catch(reject);
            });
        });
    }

    const updateConversation = async (conversationName) => {
        if(!globalState.loading?.messages){
            const { conversation } = globalState;
            const actualConversation = conversation?.conversation;
            if(conversation?.conversationName !== conversationName){
                actualConversation?.removeAllListeners();
                setGlobalState({...globalState, loading: {messages: true, participants: true}});
                getMyConversation(conversationName)
                .then(fetchedConversation => {
                    updateGlobalConversation({ conversationName, conversation: fetchedConversation });
                })
                .catch(async () => {
                    await addConversationUser(conversationName);
                    const fetchedConversation = await getMyConversation(conversationName);
                    updateGlobalConversation({ conversationName, conversation: fetchedConversation });
                })
            }
        }
    }

    const joinConversation = async (conversationName, endCallback) => {
        await addConversationUser(conversationName);
        const { administrator } = await request.get(`/api/conversations/${conversationName}/administrator`);
        navigate(`/conversaciones/${conversationName}`);
        endCallback(administrator);
    }

    const getUserConversations = () => request.get("/api/user/conversations");

    const getMessagesConversation = async (setMessages) => {
        const { conversation } = globalState.conversation;
        let messages = (await conversation.getMessages()).items;
        setMessages(messages);
        setGlobalState({...globalState, loading: {...globalState.loading, messages: false}});
		conversation.on("messageAdded", message => {
            messages = [...messages, message];
            setMessages(messages);
		});
    }

    const sendMessage = (message) => {
        const { conversation } = globalState;
        conversation.conversation.sendMessage(message);
    }

    const getParticipantsConversation = async (setParticipants) => {
        const { conversation } = globalState.conversation;
        let participants = await conversation.getParticipants();
        setParticipants(participants);
        setGlobalState({...globalState, loading: {...globalState.loading, participants: false}});
        conversation.on('participantJoined', participant => {
            participants = [participant, ...participants];
            setParticipants(participants);
        });
    }

    const quitActualConversation = () => {
        if(!globalState) return;
        const actualConversation = globalState.conversation?.conversation;
        actualConversation?.removeAllListeners();
        const {conversation, ...actualGlobalState} = globalState;
        setGlobalState(actualGlobalState);
    }

    return {
        updateGlobalConversation,
        joinConversation,
        getUserConversations,
        updateConversation,
        getMessagesConversation,
        sendMessage,
        getParticipantsConversation,
        quitActualConversation
    }
}

export default useConversation;