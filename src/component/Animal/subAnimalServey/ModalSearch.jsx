import React from 'react'
import { Modal, Button, Form, Input, Card, List } from 'antd'

class ModalSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            ModalVisibel: true
        }
    }

    onSearch = () => {
        this.setState({ ModalVisibel: true })
    }

    onSubmit = async (e) => {
        let varlue = { ...e,'tour':'555' }

        if(varlue.lName===undefined){
            varlue.lName = ' '
        }

        console.log(varlue)
    }

    render() {
        return (
            <div>
                <Button
                    onClick={this.onSearch}
                >
                    {'ค้นหาข้อมูล'}
                </Button>
                <Modal
                    visible={this.state.ModalVisibel}
                    onCancel={() => this.setState({ ModalVisibel: false })}
                    footer={null}
                >
                    <Card>
                        <Form
                            labelCol={{ sm: { span: 8 }, lg: { span: 3 } }}
                            onFinish={this.onSubmit}
                        >
                            <Form.Item
                                name="id"
                                label="รหัส"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="fName"
                                label="ชื่อจริง"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="ชื่อเล่น"
                                name="lName"
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{ lg: { span: 8, offset: 3 }, md: { span: 24, offset: 8 } }}
                            >
                                <Button htmlType="submit">ค้นหา</Button>
                            </Form.Item>
                        </Form>
                        <hr />
                        <List>

                        </List>
                    </Card>