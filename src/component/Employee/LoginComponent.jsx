import React from 'react'
import { connect } from 'react-redux'
import Logo from '../../imges/elephen.png'
import { Form, Input, Col, Card, Row } from 'antd'
const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
}
class LoginComponent extends React.Component {

    render() {
        return (
            <Row justify="center">
                <Col lg={{ span: 10 }}>
                    <Card
                        cover={<div style={{ textAlign: "center" }}>
                            <img src={Logo} style={{ width: '200px' }} />
                        </div>}
                    >
                        <Form
                            {...layout}
                        >
                            <Form.Item
                                label="USER"
                                name="user"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="PASSWORD"
                                name="password"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="REGITER">
                                <a href="/regit" type="link">ลงทะเบียน</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps)(LoginComponent)