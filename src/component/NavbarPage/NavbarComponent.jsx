import React from 'react'
import { LoginStatus } from '../../api/CheckLoginApis'
import { connect } from 'react-redux'
import { Menu, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router-dom'
import Logo from '../../imges/logo.png'

const { Header } = Layout
const { SubMenu } = Menu
const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
class NavbarComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            key: '',
            redirect: false
        }
    }

    componentDidMount() {
        const { cookies } = this.props
        const token = cookies.cookies.token_cookie
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

                } else {
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

    MenuRouter = (e) => {
        let part = e.key
        this.setState({
            key: part
        })

        const { cookies } = this.props
        const token = cookies.cookies.token_cookie

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

                } else {
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
        }
        const user = this.props.propsData.user
        let menuLogin = (user == undefined) ?
            <Link to="/login">
                {"เข้าสู่ระบบ"}
            </Link>
            :
            <Link to="/login">
                {user.employee_prefix_description + ' ' + user.employee_fname + ' ' + user.employee_lname}
            </Link>

        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <img src={Logo} style={{ width: '40%' }} />
                </div>

                <Header style={{ backgroundColor: '#fff' }}>
                    <Menu onClick={this.MenuRouter} mode="horizontal" theme="light" >
                        <Menu.Item key="/main" >
                            <Link to='/main'>
                                {"หน้าหลัก"}
                            </Link>
                        </Menu.Item>
                        <SubMenu title="บันทึกข้อมูล">
                            <Menu.ItemGroup >
                                <Menu.Item key="/animal_regit">
                                    <Link to="/animal_regit">{'ลงทะเบียนสัตว์ป่า'}</Link>
                                </Menu.Item>
                                <Menu.Item key="/animal_survey">
                                    <Link to="/animal_survey">{'บันทึกการพบเจอสัตว์ป่า'}</Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu title="ระบบรายงาน">
                            <Menu.ItemGroup >
                                <Menu.Item key="/animal_registration">
                                    <Link to="/animal_registration">{'ทะเบียนสัตว์ป่า'}</Link>
                                </Menu.Item>
                                <Menu.Item key="/animal_survey_report">
                                    <Link to="/animal_survey_report">{'บันทึกการพบเจอสัตว์ป่า'}</Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="/login" style={{float:'right'}}>
                            {menuLogin}
                        </Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}

export default withRouter(withCookies(connect(mapStateToProps)(NavbarComponent)))