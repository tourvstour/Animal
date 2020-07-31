import React from 'react'
import local from 'antd/es/date-picker/locale/th_TH'
import moment, { now } from 'moment';
import { AnimalDataRegit, AnimalDescover } from '../../../api/AnimalApis'
import { connect } from 'react-redux'
import { Row, Col, Upload, Input, DatePicker, TimePicker, Select, Card, Switch, Skeleton, Form, Button, message } from 'antd'
import * as Icon from '@ant-design/icons'
import ModalSearch from './ModalSearch'

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
            animalType: [],
            animalSex: [],
            animalInjury: [],
            //
            injuryStat: false,
            deathStat: false,
            //
            dateSelect: '',
            timeSelect: '',
            injuryLevel: ''

        }
    }

    async componentDidMount() {
        let dataRegit = await AnimalDataRegit()
        this.setState({
            animalType: dataRegit.AnimalType,
            animalSex: dataRegit.AnimalSex,
            animalInjury: dataRegit.AnimalInjury
        })
    }

    onInjury = (e) => {
        this.setState({ injuryStat: e })
    }

    onDeath = (e) => {
        this.setState({ deathStat: e })
    }

    dateChange = (a, b) => {
        let date = b
        this.setState({ dateSelect: date })
    }

    timeChange = (a, b) => {
        let time = b
        this.setState({ timeSelect: time })
    }

    injuryChange = (a, b) => {
        let injury = a
        this.setState({ injuryLevel: injury })
    }

    onSave = async () => {
        let injuryDescription = "",
            deathDescription = "",
            injuryTitles = ""
        if (document.getElementById('injuryDescription') !== null) {
            injuryDescription = document.getElementById('injuryDescription').value
        }
        if (document.getElementById('deathDescription') !== null) {
            deathDescription = document.getElementById('deathDescription').value
        }
        if (document.getElementById('injuryTitle') !== null) {
            injuryTitles = document.getElementById('injuryTitle').value
        }

        let data = {
            animalId: this.props.data.animalData[0].animal_id,
            date: this.state.dateSelect,
            time: this.state.timeSelect,
            latitude: document.getElementById('latitude').value,
            longitude: document.getElementById('longitude').value,
            employeeId: this.props.data.user.employee_id,
            injury: {
                injuryStatus: this.state.injuryStat,
                injuryTitles: injuryTitles,
                injuryDescription: injuryDescription,
                injuryLevel: this.state.injuryLevel
            },
            death: {
                deathStatus: this.state.deathStat,
                deathDescription: deathDescription
            }
        }

        if (data.animalId.length === 0) {
            message.warning('ไม่พบข้อมูล')
        } else if (this.state.dateSelect === "") {
            message.warning('ระบุวันที่')
        } else if (this.state.timeSelect === "") {
            message.warning('ระบุเวลา')
        } else if (data.latitude === "" || data.longitude === "") {
            message.warning('ระบุละติจูด ลองจิจูด')
        } else if (data.employeeId === "") {
            message.error('กรุณาล็อคอิน')
        } else if (data.injury.injuryStatus === true && (data.injury.injuryTitles === "" || data.injury.injuryDescription === "" || data.injury.injuryLevel === "")) {
            message.warning('ระบุอาการบาดเจ็บ')
        } else if (data.death.deathStatus === true && (data.death.deathDescription === "")) {
            message.warning('ระบุสาเหตการเสียชีวิต')
        } else {
            await AnimalDescover(data)
        }

    }

    render() {
        return (
            <Row gutter={[8, 8]}>
                <Col lg={{ span: 12 }} >
                    <Card>
                        <Form>
                            <Row gutter={[8, 8]}>
                                <Col span={24}>
                                    <div style={{ textAlign: 'right' }}>
                                        <ModalSearch />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="ชนิด">
                                        <Select
                                            style={{ width: '100%' }}
                                            value={this.props.data.animalData.map(a => a.animal_type_description).toString()}
                                        >
                                            {this.state.animalType.map((a, b) =>
                                                <Option key={b} value={a.animal_type_id}>{a.animal_type_description}</Option>
                                            )}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="เพศ">
                                        <Select
                                            style={{ width: '100%' }}
                                            value={this.props.data.animalData.map(a => a.animal_sex_description).toString()}
                                        >
                                            {this.state.animalSex.map((a, b) =>
                                                <Option key={b} value={a.animal_sex_id}>{a.animal_sex_description}</Option>
                                            )}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="ชื่อจริง">
                                        <Input value={this.props.data.animalData.map(a => a.animal_fname).toString()} />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="นามสกุล">
                                        <Input value={this.props.data.animalData.map(a => a.animal_lname).toString()} />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="ชื่อเล่น">
                                        <Input value={this.props.data.animalData.map(a => a.animal_nick_name).toString()} />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="วันเกิด">
                                        <DatePicker locale={local} value={moment(this.props.data.animalData.map(a => a.animal_birthday).toString(), 'YYYY-MM-DD')} />
                                    </Form.Item>
                                </Col>
                                <Col span={14}>
                                    <Form.Item label="อายุ">
                                        {this.props.data.animalData.map(a => a.animal_age)}
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="สถานะ">
                                        {this.props.data.animalData.map(a => a.animal_discharge_description)}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>

                <Col lg={{ span: 12 }} >
                    <Form>
                        <Card>
                            <Col span={16}>
                                <Form.Item label="วันที่">
                                    <DatePicker onChange={this.dateChange} locale={local} />
                                </Form.Item>
                                <Form.Item label="เวลา">
                                    <TimePicker onChange={this.timeChange} />
                                </Form.Item>
                            </Col>
                            <Col span={16}>
                                <Form.Item label="ละติจูด">
                                    <Input id="latitude" />
                                </Form.Item>
                                <Form.Item label="ลองจิจูด">
                                    <Input id="longitude" />
                                </Form.Item>
                            </Col>
                            <Col span={20}>
                                <Form.Item label="อัพโหลดภาพ">
                                    <Upload
                                        multiple={true}
                                        listType="picture-card"
                                    >
                                        <Icon.CameraOutlined />
                                    </Upload>
                                </Form.Item>
                            </Col>
                            <hr />
                            <Form.Item label="อาการบาดเจ็บ">
                                <Switch onChange={this.onInjury} />
                            </Form.Item>
                            <Skeleton active loading={!this.state.injuryStat}>
                                <Col span={20}>
                                    <Form.Item label="อาการบาดเจ็บ">
                                        <Input id="injuryTitle" />
                                    </Form.Item>
                                </Col>
                                <Col span={20}>
                                    <Form.Item label="รายละเอียด">
                                        <Input.TextArea
                                            id="injuryDescription"
                                            rows={4}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={20}>
                                    <Form.Item label="ลำดับความรุนแรง">
                                        <Select
                                            onSelect={this.injuryChange}
                                        >
                                            {this.state.animalInjury.map((a, b) =>
                                                (
                                                    <Option key={b} value={a.f_injury_level_id}>{a.injury_level_description}</Option>
                                                )
                                            )}
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Skeleton>
                            <hr />
                            <Form.Item label="เสียชีวิต">
                                <Switch onChange={this.onDeath} />
                            </Form.Item>
                            <Skeleton active loading={!this.state.deathStat}>
                                <Col span={20}>
                                    <Form.Item label="สาเหตุการตาย">
                                        <Input.TextArea
                                            rows={4}
                                            id="deathDescription"
                                        />
                                    </Form.Item>
                                </Col>
                            </Skeleton>
                            <Button onClick={this.onSave}>{"บันทึก"}</Button>
                        </Card>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default connect(mapPropsToState)(TabIdentity)