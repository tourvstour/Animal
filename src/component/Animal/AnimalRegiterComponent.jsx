import React from 'react'
import { Form, Input, DatePicker, Select, Button, Col } from 'antd'
import local from 'antd/es/date-picker/locale/th_TH'
import { AnimalDataRegit } from '../../api/AnimalApis'
import { connect } from 'react-redux'

const { Option } = Select
const mapStatetoProps = (state) => {
    return {
        dataProps: state
    }
}

class AnimalRegiterComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            animalType: [],
            animalSex: []
        }
    }

    async componentDidMount() {
        let dataRegit = await AnimalDataRegit()

        console.log(dataRegit.AnimalType)
        this.setState({
            animalType: dataRegit.AnimalType,
            animalSex: dataRegit.AnimalSex
        })
    }

    onFinish = (e) => {
        let employee = this.props.dataProps.user.employee_id
        let value = {
            ...e,
            'birthDay': e['birthDay'].format('YYYY-MM-DD'),
            'employee': employee
        }
        console.log(value)
    }

    render() {

        return (
            <Col sm={{ span: 24 }}>
                <Form
                    wrapperCol={{
                        span: 16
                    }}
                    labelCol={{
                        span: 8
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="ชนิดสัตว์ป่า"
                        name="animalType"
                        rules={[{ required: true, message: 'ระบุชนิดสัตว์ป่า' }]}
                    >
                        <Select>
                            {this.state.animalType.map((a, b) =>
                                (
                                    <Option key={b} value={a.animal_type_id}>{a.animal_type_description}</Option>
                                )
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="ชื่อเล่น"
                        name="nickName"
                        rules={[{ required: true, message: 'ระบุชนิดชื่อเล่น' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="ชื่อจริง"
                        name="fName"
                        rules={[{ required: true, message: 'ระบุชนิดชื่อจริง' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="นามสกุล"
                        name="lName"
                    >
                        <Input defaultValue={''} />
                    </Form.Item>
                    <Form.Item
                        label="วันเกิด"
                        name="birthDay"
                        rules={[{ required: true, message: 'วันเกิด' }]}
                    >
                        <DatePicker
                            locale={local}
                        />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: 'ระบุเพศ' }]}
                        label="เพศ"
                        name="animalSex"
                    >
                        <Select>
                            {this.state.animalSex.map((a, b) =>
                                (
                                    <Option key={b} value={a.animal_sex_id}>{a.animal_sex_description}</Option>
                                )
                            )}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label=" "
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        <Button
                            htmlType="submit"
                            type="primary"
                            block
                        >
                            {'บันทึก'}
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        )

    }
}

export default connect(mapStatetoProps)(AnimalRegiterComponent)