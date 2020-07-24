import { connect } from 'react-redux'

let mapDispatch = (a, b) => {

    return this.props.dispatch({
        type: a,
        data: b
    })
}

export default connect()(mapDispatch)