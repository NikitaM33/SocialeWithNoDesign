import profileReduser, { addPostActionCreater, deletePost } from './propfileReduser';

let state = {
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
    ]
};


it('Length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreater("it-camasutra.com");

    // 2. action
    let newState = profileReduser(state, action);

    // 3. expectation
    expect(newState.postData.length).toBe(4);
});


it('new post should be add "it-camasutra.com"', () => {
    // 1. test data
    let action = addPostActionCreater("it-camasutra.com");

    // 2. action
    let newState = profileReduser(state, action);

    // 3. expectation
    expect(newState.postData[3].message).toBe("it-camasutra.com");
});


it('after post deleting message length should be decrimented', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReduser(state, action);

    // 3. expectation
    expect(newState.postData.length).toBe(2);

});