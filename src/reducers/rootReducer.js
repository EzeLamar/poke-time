const initState = {
    posts: [
        {id:'1', title: 'titulo_1', body: "body_1"},
        {id:'2', title: 'titulo_2', body: "body_2"},
        {id:'3', title: 'titulo_3', body: "body_3"},
    ],
}

const rootRedcuer = (state= initState, action) => {
    return state;
}

export default rootRedcuer