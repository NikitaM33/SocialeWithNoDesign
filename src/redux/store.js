import profileReduser from './propfileReduser';
import messageReduser from './messageReduser';
import friendsReduser from './friendsReduser';

const store = {
    _state: {
        profilePage: {
            postData: [
                {
                    id: 1,
                    like: 8,
                    message: 'Hey, how r u?'
                },
                {
                    id: 2,
                    like: 10,
                    message: 'Hey, it`s my first post!'
                },
                {
                    id: 3,
                    like: 25,
                    message: 'Who`s there?'
                }
            ],

            newPostText: 'it-camasutra.com'
        },

        messagePage: {
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
            ],

            newMessageBody: ""
        },

        friendsPage: {
            friendsData: [
                {
                    id: 1,
                    name: 'Nikita',
                    foto: 'img' 
                },
                {
                    id: 2,
                    name: 'Nadya',
                    foto: 'img' 
                },
                {
                    id: 3,
                    name: 'Armen man',
                    foto: 'img' 
                },
                {
                    id: 4,
                    name: 'Antoha',
                    foto: 'img' 
                },
                {
                    id: 5,
                    name: 'Dimych',
                    foto: 'img' 
                }
            ]
        },
    },

    _callSubscriber () {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.messagePage = messageReduser(this._state.messagePage, action);
        this._state.friendsPage = friendsReduser(this._state.friendsPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;