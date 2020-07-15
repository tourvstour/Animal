import React from 'react'
import { Modal, Button, Form, Input, Card, List, Row, Col, Avatar } from 'antd'
import { AnimalData } from '../../../api/AnimalApis'
import { connect } from 'react-redux'
const mapStateToProps = state => {
    return {
        dataProps: state
    }
}

class ModalSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            ModalVisibel: true,
            searthFromApi: []
        }
    }

    onSearch = () => {
        this.setState({ ModalVisibel: true })
    }

    onSubmit = async (e) => {
        let varlue = { ...e }

        if (varlue.id === undefined || varlue.id === "") {
            varlue.id = " "
        }
        if (varlue.fName === undefined || varlue.fName === "") {
            varlue.fName = " "
        }
        if (varlue.lName === undefined || varlue.lName == "") {
            varlue.lName = " "
        }

        let dataRes = await AnimalData(varlue)

        this.setState({
            searthFromApi: dataRes.result
        })
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
                            labelCol={{ sm: { span: 3 }, lg: { span: 3 } }}
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
                                wrapperCol={{ lg: { span: 8, offset: 3 }, md: { span: 24, offset: 10 } }}
                            >
                                <Button htmlType="submit">ค้นหา</Button>
                            </Form.Item>
                        </Form>
                        <hr />
                        <List
                            dataSource={this.state.searthFromApi}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={` ${item.animal_fname} ${item.animal_lname }`}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                
                                </List.Item>
                            )}
                        />
                    </Card>
                </Modal>
            </div >
        )
    }
}

export default connect(mapStateToProps)(ModalSearch)