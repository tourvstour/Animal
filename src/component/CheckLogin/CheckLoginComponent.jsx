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
            employeeLogin: '',
            redirect: false
        }
    }

    componentDidMount() {
        const { cookies } = this.props
        let userName = cookies.cookies.user
        if (userName === undefined) {
            this.setState({
                employeeLogin: ''
            })
        } else {
            let userLogin = cookies.get('userName').employee_prefix_description + ' ' + cookies.get('userName').employee_fname + ' ' + cookies.get('userName').employee_lname
            this.setState({
                employeeLogin: userLogin
            })
        }
    }

    async componentWillReceiveProps(input) {
        const { cookies } = this.props
        let token = cookies.cookies.token_cookie

        this.setState({
            propsInput: input.nameProps
        })

        const checkFuntion = async () => {
            if (token === undefined) {
                this.setState({
                    redirect: true
                })
            } else {
                let loginStatus = await LoginStatus({ token }),
                    tokenStat = loginStatus.user[0].expri_stat
                if (tokenStat === true) {
                    cookies.remove('token_cookie', { path: '/' })
                    cookies.remove('userName', { path: '/' })
                    this.setState({
                        employeeLogin: ''
                    })
                } else {
                    let userLogin = cookies.get('userName').employee_prefix_description + ' ' + cookies.get('userName').employee_fname + ' ' + cookies.get('userName').employee_lname
                    this.setState({
                        employeeLogin: userLogin
                    })
                    this.props.dispatch({
                        'type': 'userLogin',
                        'data': loginStatus.user[0]
                    })

                }
            }
        }
        if (window.location.pathname !== '/regit') {
            checkFuntion()
        }
    }

    render() {
        const redirect = this.state.redirect
        if (redirect) {
            this.setState({
                redirect: false
            })
            return (<Redirect to='/login' />)
        } else {
            return (
                <div>
                    {this.state.employeeLogin}
                </div>
            )
        }

    }
}

export default withCookies(connect(mapStateToProps)(CheckLoginComponent))