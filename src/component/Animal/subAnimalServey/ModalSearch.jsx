import React from 'react'
import { Modal, Button, Form, Input, Table, message } from 'antd'
import { AnimalDataSearch, AnimalDataService } from '../../../api/AnimalApis'
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
            ModalVisibel: false,
            searchFromApi: []
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
        if (varlue.lName === undefined || varlue.lName === "") {
            varlue.lName = " "
        }

        try {
            let dataRes = await AnimalDataSearch(varlue)
            this.setState({
                searchFromApi: dataRes.result
            })
        } catch (err) {
            message.error('Not Connect to Internet')
        }
    }

    Tables = async (e) => {
        let id = e.animal_id,
            resultService = await AnimalDataService({ id })
        this.props.dispatch({
            type: 'serviceList',
            data: resultService,
        })
        this.props.dispatch({
            type: 'animalData',
            data: e
        })
        this.setState({
            ModalVisibel: false
        })
    }

    render() {
        const columnName = [
            {
                title: 'ID',
                dataIndex: 'animal_id',
                key: 'animal_id',
                width: '10%'
            },
            {
                title: 'ชื่อ',
                dataIndex: 'animal_fname',
                key: 'animal_id',
                width: '15%',
                render: (text, animal_id) => <a onClick={() => this.Tables(animal_id)}>{text}</a>
            },
            {
                title: 'นามสกุล',
                dataIndex: 'animal_lname',
                key: 'animal_id',
                width: '15%',
                render: (text, animal_id) => <a onClick={() => this.Tables(animal_id)}>{text}</a>
            },
            {
                title: 'ชื่อเล่น',
                dataIndex: 'animal_nick_name',
                key: 'animal_id',
                width: '15%',
                render: (text, animal_id) => <a onClick={() => this.Tables(animal_id)}>{text}</a>
            },
            {
                title: 'วันเกิด',
                dataIndex: 'animal_birthday',
                key: 'animal_id',
                width: '15%',
                render: (text, animal_id) => <a onClick={() => this.Tables(animal_id)}>{text}</a>
            },
            {
                title: 'อายุ',
                dataIndex: 'animal_age',
                key: 'animal_id',
                width: '25%',
                render: (text, animal_id) => <a onClick={() => this.Tables(animal_id)}>{text}</a>
            }
        ]

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
                            wrapperCol={{
                                lg: { span: 8, offset: 3 },
                                md: { span: 24, offset: 10 }
                            }}
                        >
                            <Button htmlType="submit">ค้นหา</Button>
                        </Form.Item>
                    </Form>
                    <hr />
                    <Table
                        dataSource={this.state.searchFromApi}
                        columns={columnName}
                        size="small"
                        rowKey={'animal_id'}
                    />
                </Modal>
            </div >
        )
    }
}

export default connect(mapStateToProps)(ModalSearch)