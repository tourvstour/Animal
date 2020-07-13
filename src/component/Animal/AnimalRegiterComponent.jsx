import React from 'react'
import local from 'antd/es/date-picker/locale/th_TH'
import { Form, Input, DatePicker, Select, Button, Col, message } from 'antd'
import { AnimalDataRegit } from '../../api/AnimalApis'
import { connect } from 'react-redux'
import { AnimalRegit } from '../../api/AnimalApis'

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

        this.setState({
            animalType: dataRegit.AnimalType,
            animalSex: dataRegit.AnimalSex
        })
    }

    onFinish = async (e) => {
        let employee = this.props.dataProps.user.employee_id,
            value = {
                ...e,
                'animal_birthday': e['animal_birthday'].format('YYYY-MM-DD'),
                'animal_employee_edit': employee
            }

        let regiterApi = await AnimalRegit(value)

        regiterApi.res.code === "200" ? message.success(regiterApi.res.message) : message.error(regiterApi.res.message)

    }

    render() {

        return (
            <Col lg={{ span: 8 }} >
                <Form
                    labelCol={{ sm: { span: 8 }, lg: { span: 5 } }}
                    wrapperCol={{ sm: { span: 24 }, lg: { span: 22 } }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="ชนิดสัตว์ป่า"
                        name="animal_type_id"
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
                        name="animal_nick_name"
                        rules={[{ required: true, message: 'ระบุชนิดชื่อเล่น' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="ชื่อจริง"
                        name="animal_fname"
                        rules={[{ required: true, message: 'ระบุชื่อจริง' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="นามสกุล"
                        name="animal_lname"
                        rules={[{ required: true, message: 'ระบุนามสกุล' }]}
                    >
                        <Input defaultValue={''} />
                    </Form.Item>
                    <Form.Item
                        label="วันเกิด"
                        name="animal_birthday"
                        rules={[{ required: true, message: 'วันเกิด' }]}
                    >
                        <DatePicker
                            locale={local}
                        />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: 'ระบุเพศ' }]}
                        label="เพศ"
                        name="animal_f_sex_id"
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
                        wrapperCol={{ lg: { span: 8, offset: 2 }, 	md: { span: 24 ,offset: 8} }}

                    >
                        <Button
                            htmlType="submit"
                            type="primary"

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