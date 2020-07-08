import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../imges/elephen.png'
import { Form, Input, Col, Card, Row, Button, message } from 'antd'
import { EmployeeLogin } from '../../api/EmployeeApis'
import { useCookies } from 'react-cookie'

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
        let login = await EmployeeLogin(e)
        console.log(login.res)
        if (login.res.code === "200") {
            message.success(login.res.message)
            this.props.dispatch({
                type: 'login',
                data: login
            })
        } else {
            message.error(login.res.message)
        }
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
                            <Link to="/regit">
                                <Button
                                    block type={"link"}
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

export default connect(mapStateToProps)(LoginComponent)