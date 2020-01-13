let initialState = {
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
}

const friendsReduser = (state = initialState) => {
    return state;
};

export default friendsReduser;