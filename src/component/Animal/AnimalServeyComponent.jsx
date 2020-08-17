import React from 'react'
import { Tabs, Card } from 'antd'
import { connect } from 'react-redux'
import * as Icon from '@ant-design/icons'

import TabIdentity from './subAnimalServey/TabIdentity'
import TabHistory from './subAnimalServey/TabHistory'

const mapPropsToState = state => {
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
                <Card style={{ height: '100%' }}>
                    <Tabs defaultActiveKey="1" type="card">
                        <TabPane tab={<div style={{ ...fornt }}>{"1."}<Icon.ReconciliationOutlined />{"ข้อมูล"}</div>} key="1">
                            <TabIdentity />
                        </TabPane>
                        <TabPane tab={<div style={{ ...fornt }}>{"2."}<Icon.CompassOutlined />{"ประวัติการพบเจอ"}</div>} key="2">
                            <TabHistory />
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default connect(mapPropsToState)(AnimalServeyComponent)