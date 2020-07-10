import React from 'react'
import CheckLoginComponent from '../CheckLogin/CheckLoginComponent'
import { LoginStatus } from '../../api/CheckLoginApis'
import { connect } from 'react-redux'
import { Menu, Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import { Redirect } from 'react-router-dom'

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
    MenuRouter = (e) => {
        let part = e.key
        this.setState({
            key: part
        })

        const { cookies } = this.props
        let token = cookies.cookies.token_cookie

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

        let menuLogin = (this.props.propsData.user == undefined) ?
            <Link to="/login">
                {"เข้าสู่ระบบ"}
            </Link>
            :
            <Link to="/login">
                {this.props.propsData.user.employee_prefix_description + ' ' + this.props.propsData.user.employee_fname + ' ' + this.props.propsData.user.employee_lname}
            </Link>


        return (
            <Header style={{ backgroundColor: '#fff' }}>
                <div style={{
                    float: 'right'
                }}>

                </div>
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
                    <Menu.Item key="/login" style={{float:'right'}}>
                        {menuLogin}
                    </Menu.Item>
                </Menu>

            </Header>
        )
    }
}

export default withRouter(withCookies(connect(mapStateToProps)(NavbarComponent)))