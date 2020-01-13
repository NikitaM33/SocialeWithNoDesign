// const NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY'; // Не нужен потому, что теперь это все делает redux-form
const SEND_MESSAGE = 'samuraiNetwork/message/SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Nikita'
        },
        {
            id: 2,
            name: 'Nadya'
        },
        {
            id: 3,
            name: 'Armen man'
        },
        {
            id: 4,
            name: 'Antoha'
        },
        {
            id: 5,
            name: 'Dimych'
        },
    ],

    messgeData: [
        {
            id: 1,
            message: "Hi everybody!"
        },
        {
            id: 2,
            message: "Hey"
        },
        {
            id: 3,
            message: "Whasup"
        },
        {
            id: 4,
            message: "Hi"
        },
        {
            id: 5,
            message: "Yo!"
        }
    ]
}

const messageReduser = (state = initialState, action) => {

    switch(action.type){
        // case NEW_MESSAGE_BODY:
        //         return{
        //             ...state,
        //             newMessageBody: action.body
        //         };
        //     // stateCopy.newMessageBody = action.body; // Не нужен потому, что теперь это все делает redux-form

        case SEND_MESSAGE:
        let body = action.newMessageBody;

        return {
            ...state,
            messgeData: [...state.messgeData, {id: 6, message: body}]
        };

        default: return state;
    };
};

export const sendMessageCreater = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
// export const newMessageBodyCreater = (body) => ({ type: NEW_MESSAGE_BODY, body }); // Не нужен потому, что теперь это все делает redux-form

export default messageReduser;