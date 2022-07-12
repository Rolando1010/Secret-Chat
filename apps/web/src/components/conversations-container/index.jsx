import { GutterContainer, ThirdGutter, TwoThirdGutter } from "../gutters";
import ConversationsBar from "./bar";

const ConversationsContainer = ({ children, className = "" }) => {    
    return (
        <GutterContainer className={className}>
            <ThirdGutter>
                <ConversationsBar/>
            </ThirdGutter>
            <TwoThirdGutter>
                {children}
            </TwoThirdGutter>
        </GutterContainer>
    );
}

export default ConversationsContainer;