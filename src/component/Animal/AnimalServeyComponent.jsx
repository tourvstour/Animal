import React from 'react'
import { Form, Input, Button, Tabs, Card, Table } from 'antd'
import { connect } from 'react-redux'
import * as Icon from '@ant-design/icons'
import ModalSearch from './subAnimalServey/ModalSearch'

const mapStateToProps = state => {
    return {
        dataProps: state
    }
}

const fornt = {
    fontSize: 20
}

const { TabPane } = Tabs

class AnimalServeyComponent extends React.Component {

    render() {
        return (
            <div>
                <Card style={{ height: '80vh' }}>
                    <ModalSearch />
                    <Tabs defaultActiveKey="1" type="card">
                        <TabPane tab={<div style={{ ...fornt }}>{"1."}<Icon.ReconciliationOutlined />{"ข้อมูล"}</div>} key="1">
                            {'Content of Tab Pane 1'}
                        </TabPane>
                        <TabPane tab={<div style={{ ...fornt }}>{"2."}'<Icon.VideoCameraAddOutlined />{"บันทึกการพบเจอ"}</div>} key="2">
                            {"  Content of Tab Pane 2"}
                        </TabPane>
                        <TabPane tab={<dib style={{ ...fornt }}><Icon.HistoryOutlined />{"ประวัติการบันทึกข้อมูล"}</dib>} key="3">
                            {" ประวัติการบันทึกข้อมูล"}
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnimalServeyComponent)