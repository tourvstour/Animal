const storeList = {
    pageAtion: [],
    pageEditid: [],
    user: undefined,
    loginData: Object
}

const Reducer = (state = storeList, action) => {
    switch (action.type) {
        case 'login':
            return Object.assign({}, state, {
                loginData: state.loginData = action.data
            })
            break;

        default:
            return state
            break;
    }
}

export default Reducer