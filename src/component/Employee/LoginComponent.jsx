import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../imges/elephen.png'
import { Form, Input, Col, Card, Row, Button, message } from 'antd'
import { EmployeeLogin } from '../../api/EmployeeApis'
import { withCookies } from 'react-cookie'
import CheckLoginComponent from '../CheckLogin/CheckLoginComponent'
import { LoginStatus } from '../../api/CheckLoginApis'

const mapStateToProps = (state) => {
    return {
        propsData: state,
        key: ''
    }
}

const layout = {
    labelCol: { span: 8 }
}
class LoginComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            key: ''
        }
    }

    onFinish = async (e) => {
        const { cookies } = this.props
        let login = await EmployeeLogin(e)

        if (login.res.code === "200") {
            message.success(login.res.message)
            cookies.set('token_cookie', login.token[0].login_token_number, { path: '/' })
            cookies.set('userName', login.user[0], { path: '/' })
            let token = cookies.cookies.token_cookie,
                loginStatus = await LoginStatus({ token }),
                tokenStat = loginStatus.user[0].expri_stat

            if (tokenStat === true) {
                cookies.remove('token_cookie', { path: '/' })
                cookies.remove('userName', { path: '/' })
                this.props.dispatch({
                    'type': 'logout'
                })
            } else {
                this.props.dispatch({
                    'type': 'userLogin',
                    'data': loginStatus.user[0]
                })
            }
        } else {

            message.error(login.res.message)
            cookies.remove('token_cookie', { path: '/' })
            cookies.remove('userName', { path: '/' })
            this.props.dispatch({
                'type': 'logout'
            })
        }
    }

    onLogout = () => {
        let { cookies } = this.props
        cookies.remove('token_cookie', { path: '/' })
        cookies.remove('userName', { path: '/' })
        message.success('Logout')
        this.props.dispatch({
            'type': 'logout'
        })
    }

    render() {
        return (
            <Row justify="center">
                <Card
                    cover={<div style={{ textAlign: "center" }}>
                        <img src={Logo} style={{ width: '200px' }} />
                    </div>}
                >
                    <Form
                        {...layout}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            label="USER NAME"
                            name="user"
                            rules={[{ required: true, message: 'Please input your USER NAME!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="PASSWORD"
                            name="password"
                            rules={[{ required: true, message: 'Please input your PASSWORD!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 24, offset: 0 }}>
                            <Button block type={'primary'} htmlType={"submit"}>{"LOGIN"}</Button>
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 24, offset: 0 }}>
                            <Button block type={'primary'} danger onClick={this.onLogout}>{"LOGOUT"}</Button>
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 24, offset: 0 }}>
                            <Link to="/regit" >
                                <Button
                                    block
                                    type={"link"}
                                    onClick={this.onRegit}
                                >
                                    {"ลงทะเบียน"}
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        )
    }
}

export default withCookies(connect(mapStateToProps)(LoginComponent))