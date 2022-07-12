const getUserAvatar = (username) => `https://i.pravatar.cc/150?u=${username}`;

const getChatAvatar = (chatName) => `https://picsum.photos/200/300?random=${chatName}`;

export {
    getUserAvatar,
    getChatAvatar
}