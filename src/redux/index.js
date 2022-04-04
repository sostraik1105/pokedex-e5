const INITIAL_STATE={
    userName: "",
    type: ""
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_USERNAME":
            return{
                ...state,
                userName : action.payload
            }
        case "GET_TYPE":
            return{
                ...state,
                type : action.payload
            }
        default:
            return state;
    }
}

export default reducer;