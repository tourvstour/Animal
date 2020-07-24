import React from 'react'
import { Tabs, Card } from 'antd'
import { connect } from 'react-redux'
import * as Icon from '@ant-design/icons'
import ModalSearch from './subAnimalServey/ModalSearch'
import TabIdentity from './subAnimalServey/TabIdentity'

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
                            <TabIdentity />
                        </TabPane>
                        <TabPane tab={<div style={{ ...fornt }}>{"2."}<Icon.CompassOutlined />{"บันทึกการพบเจอ"}</div>} key="2">
                            {"  Content of Tab Pane 2"}
                        </TabPane>
                        <TabPane tab={<div style={{ ...fornt }}><Icon.HistoryOutlined />{"ประวัติการบันทึกข้อมูล"}</div>} key="3">
                            {" ประวัติการบันทึกข้อมูล"}
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AnimalServeyComponent)