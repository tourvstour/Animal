import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../imges/elephen.png'
import { Form, Input, Col, Card, Row, Button } from 'antd'
import { useCookies } from 'react-cookie';
const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
const layout = {
    labelCol: { span: 8 }
}
class LoginComponent extends React.Component {

    onFinish = (e) => {
        console.log(e)
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
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="PASSWORD"
                            name="password"
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