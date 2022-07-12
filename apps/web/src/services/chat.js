import { Client } from '@twilio/conversations';

const getTwilioClient = (accesstoken) => {
    const client = new Client(accesstoken);
    return new Promise((resolve, reject) => {
        client.on("stateChanged", state => {
            if(state === "initialized"){
                // client.getConversationByUniqueName().then(c => c);
                resolve(client);
            }
        });
    });
}

const getConversation = (conversationName, accesstoken) => {
    return new Promise((resolve, reject) => {
        getTwilioClient(accesstoken).then(client => {
            client.createConversation({ uniqueName: conversationName })
            .then(resolve)
            .catch(() => {
                client.getConversationByUniqueName(conversationName)
                .then(resolve)
                .catch(reject);
            });
        });
    });
}

const getExistingConversation = (conversationName, accesstoken) => {
    return new Promise((resolve, reject) => {
        getTwilioClient(accesstoken).then(client => {
            client.getConversationByUniqueName(conversationName)
            .then(resolve)
            .catch(reject)
        });
    });
}

export {
    getConversation,
    getExistingConversation
}