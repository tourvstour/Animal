import React from 'react'
import { Form, Input, Row, Button } from 'antd'
import { EmployeeRegiterApi } from '../../api/EmployeeRegiterApi'

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 24 }
}
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
}

class RegiterComponent extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }

    FormFinish = async (e) => {
        let resulutRegiter = await EmployeeRegiterApi(e)

    }

    render() {
        return (
            <Row justify="center">
                <Form
                    {...layout}
                    onFinish={this.FormFinish}
                >
                    <Form.Item
                        label="เลขประจำตัวประชาชน"
                        name="cid"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="คำนำ"
                        name="prefix"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="ชื่อ"
                        name="fName"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="นามสกุล"
                        name="lName"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="วัน/เดือน/ปี (วันเกิด)"
                        name="birthDay"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="เบอร์โทรศัพ"
                        name="phone"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="USER"
                        name="user"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="PASSWORD"
                        name="passWord"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout} >
                        <Button type="primary" htmlType="submit">
                            {'Submit'}
                        </Button>
                    </Form.Item>
                </Form>
            </Row >
        )
    }
}

export default RegiterComponent