import React from 'react'
import { Form, Input, Row, Button, Select, DatePicker, Col, Card, Space } from 'antd'
import { EmployeeRegiterApi, EmployeePrefixApi } from '../../api/EmployeeApis'

const { Option } = Select
const layout = {
    labelCol: { span: 12 },
    wrapperCol: { span: 24 }
}

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}

const config = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select time!',
        },
    ],
}

class RegiterComponent extends React.Component {
    formRef = React.createRef();
    constructor() {
        super()
        this.state = {
            prefix: []
        }
    }

    async componentDidMount() {
        let resultPrefix = await EmployeePrefixApi()

        this.setState({
            prefix: resultPrefix.rows
        })
    }

    FormFinish = async (e) => {
        const values = {
            ...e,
            'birthDay': e['birthDay'].format('YYYY-MM-DD')
        }
        let resulutRegiter = await EmployeeRegiterApi(values)
        console.log(resulutRegiter)
    }

    onReset = (e) => {
        window.location.reload()
    }

    render() {
        return (
            <Row gutter={[8, 8]} justify="center">
                <Col lg={{ span: 8 }} xs={24}>
                    <h1 style={{ textAlign: 'center' }}>Create your account</h1>
                    <Form
                        {...layout}
                        onFinish={this.FormFinish}
                    >
                        <Form.Item
                            label="เลขประจำตัวประชาชน"
                            name="cid"
                            rules={[{ required: true, message: 'Please input your cid!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="คำนำ"
                            name="prefix"
                            rules={[{ required: true, message: 'Please input your prefix!' }]}
                        >
                            <Select>
                                {this.state.prefix.map((a, b) =>
                                    <Option key={b} value={a.employee_prefix_id}>{a.employee_prefix_description}</Option>
                                )}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="ชื่อ"
                            name="fName"
                            rules={[{ required: true, message: 'Please input your firstName!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="นามสกุล"
                            name="lName"
                            rules={[{ required: true, message: 'Please input your lastName!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="วัน/เดือน/ปี (วันเกิด)"
                            name="birthDay"
                            rules={[{ required: true, message: 'Please input your birthDay!' }]}
                            {...config}
                        >
                            <DatePicker

                            />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="เบอร์โทรศัพ"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your phone!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="USER"
                            name="user"
                            rules={[{ required: true, message: 'Please input your user!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="PASSWORD"
                            name="passWord"
                            rules={[{ required: true, message: 'Please input your passWord!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout} >
                            <Space>
                                <Button type="primary" htmlType="submit">
                                    {'Submit'}
                                </Button>
                                <Button type="ghost" htmlType="button" onClick={this.onReset}>
                                    {'Reset'}
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
                <Col lg={{ span: 16 }} xs={24}>
                    {"picter"}
                </Col>
            </Row>

        )
    }
}

export default RegiterComponent