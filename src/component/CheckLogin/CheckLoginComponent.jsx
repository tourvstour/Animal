import React from 'react'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import { Modal } from 'antd'
import { Redirect } from 'react-router-dom'
import { LoginStatus } from '../../api/CheckLoginApis'

const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
const warning = () => {
    Modal.warning({
        title: 'Loging',
        content: 'เข้าสู่ะบบก่อนใช้งาน',
    })
}

class CheckLoginComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            redirect: false
        }
    }

    // async componentWillReceiveProps(input) {

    //     const { cookies } = this.props
    //     let token = cookies.cookies.token_cookie

    //     if (token === undefined) {
    //         this.setState({
    //             redirect: true
    //         })
    //     } else {
    //         let loginStatus = await LoginStatus({ token }),
    //             tokenStat = loginStatus.user[0].expri_stat
    //         console.log(tokenStat)
    //         // if (tokenStat === true) {
    //         //     this.setState({
    //         //         redirect: true
    //         //     })
    //         // }
    //     }
    // }


    render() {
        const redirect = this.state.redirect
        if (redirect) {
            
            return (<Redirect to='/login' />)
        }
        return (
            <div>

            </div>
        )
    }
}

export default withCookies(connect(mapStateToProps)(CheckLoginComponent))