import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../imges/elephen.png'
import { Form, Input, Col, Card, Row, Button, message } from 'antd'
import { EmployeeLogin } from '../../api/EmployeeApis'
import { withCookies } from 'react-cookie'
import { LoginStatus } from '../../api/CheckLoginApis'

const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}

const layout = {
    labelCol: { span: 8 }
}

class LoginComponent extends React.Component {

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
        const user = this.props.propsData.user
        const loginBox = (user === undefined) ?
            <div>
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
            </div>
            :
            <div>
                <Form.Item>
                    <h1>{"ยินดีต้อนรับ"}</h1>
                    <h2>{`คุณ  ${user.employee_fname} ${user.employee_lname}`}</h2>
                </Form.Item>
            </div>

        return (
            <Row justify="center">
                <Col lg={{ span: 8 }}>
                    <Card
                        style={{ width: '100%', textAlign: 'center' }}
                        cover={<div style={{ textAlign: "center" }}>
                            <img src={Logo} style={{ width: '200px' }} />
                        </div>}
                    >
                        <Form
                            {...layout}
                            onFinish={this.onFinish}
                        >
                            {loginBox}
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
                </Col>
            </Row>
        )
    }
}

export default withCookies(connect(mapStateToProps)(LoginComponent))