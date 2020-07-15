const storeList = {
    pageAtion: [],
    pageEditid: [],
    animalData: [],
    user: undefined
}

const Reducer = (state = storeList, action) => {
    switch (action.type) {
        case 'userLogin':
            return Object.assign({}, state, {
                user: state.user = action.data,
            })

        case 'logout':
            return Object.assign({}, state, {
                user: state.user = undefined,
            })

        default:
            return state
    }
}

export default Reducer