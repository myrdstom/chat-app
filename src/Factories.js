import uuid from 'uuid/v4';

// Create User

const createUser = ({ name = '' } = {}) => ({
    id: uuid(),
    name,
});

//Create Message

const createMessage = ({ message = '', sender = '' } = {}) => ({
    id: uuid(),
    time: getTime(new Date(Date.now())),
    message,
    sender,
});

// Create chat
const createChat = ({
    messages = [],
    name = 'Community',
    users = [],
} = {}) => ({
    id: uuid(),
    name,
    messages,
    users,
    typingUsers: [],
});

//Return a string represented in 24hr time

const getTime = date => {
    return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
};
