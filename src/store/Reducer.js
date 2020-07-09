const storeList = {
    pageAtion: Array,
    pageEditid: Array,
    token: String,
    user: String
}

const Reducer = (state = storeList, action) => {
    switch (action.type) {
        case 'login':
            return Object.assign({}, state, {
                user: state.user = action.data.user[0],
                token: state.token = action.data.token[0].login_token_number
            })

        default:
            return state
    }
}

export default Reducer