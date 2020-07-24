const storeList = {
    pageAtion: [],
    pageEditid: [],
    animalData: [],
    serviceList: [],
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

        case 'animalData':
            return Object.assign({}, state, {
                animalData: state.animalData = [action.data]
            })

        case 'serviceList':
            return Object.assign({}, state, {
                serviceList: state.serviceList = action.data
            })

        default:
            return state
    }
}

export default Reducer