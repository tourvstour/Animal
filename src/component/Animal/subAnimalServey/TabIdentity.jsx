import React from 'react'
import local from 'antd/es/date-picker/locale/th_TH'
import moment, { now } from 'moment';
import { AnimalDataRegit } from '../../../api/AnimalApis'
import { connect } from 'react-redux'
import { Row, Col, Form, Input, DatePicker, Button, Select, Card } from 'antd'

const mapPropsToState = (state) => {
    return {
        data: state
    }
}

const { Option } = Select

class TabIdentity extends React.Component {
    constructor() {
        super()
        this.state = {
            animalSex: [],
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

    onFinish = (e) => {

    }
    render() {
        return (
            <Row gutter={[8, 8]}>
                <Col lg={{ span: 12 }} >
                    <Card>
                    <Row gutter={[8, 8]}>
                            <Col span={24}>
                                {'ชื่อ-นามสกุล-ชื่อเล่น'}
                            </Col>
                            <Col span={8}>
                                <Input value={this.props.data.animalData.map(a => a.animal_fname).toString()} />
                            </Col>
                            <Col span={8}>
                                <Input value={this.props.data.animalData.map(a => a.animal_lname).toString()} />
                            </Col>
                            <Col span={8}>
                                <Input value={this.props.data.animalData.map(a => a.animal_nick_name).toString()} />
                            </Col>

                            <DatePicker locale={local} value={moment(this.props.data.animalData.map(a => a.animal_birthday).toString(), 'YYYY-MM-DD')} />

                            <Input value={this.props.data.animalData.map(a => a.animal_type_description).toString()} />

                            <Select
                                style={{ width: '70%' }}
                                value={this.props.data.animalData.map(a => a.animal_sex_description).toString()}
                            >
                                {this.state.animalSex.map((a, b) =>
                                    <Option key={b} value={a.animal_sex_id}>{a.animal_sex_description}</Option>
                                )}
                            </Select>
                        </Row>
                    </Card>
                </Col>
                <Col lg={{ span: 12 }} >
                    <Card>

                    </Card>
                </Col>
            </Row>
        )
    }
}

export default connect(mapPropsToState)(TabIdentity)