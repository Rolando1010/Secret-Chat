import ConversationsContainer from "../../components/conversations-container";
import ConversationDetail from "./detail";
import MessageInput from "./message-input";
import Messages from "./messages";

const Conversation = () =>
    <ConversationsContainer>
        <ConversationDetail/>
        <Messages/>
        <MessageInput/>
    </ConversationsContainer>

export default Conversation;