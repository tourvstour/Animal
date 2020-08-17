import React from 'react'
import { connect } from 'react-redux'
import { Card, List, Col, Row, Button } from 'antd'

class TabHistory extends React.Component {
    constructor() {
        super()
        this.state = {
            latitude: null,
            longitude: null
        }
    }

    itemClick = (e) => {
        let lat = e.animal_descover_latitude,
            long = e.animal_descover_longitude
        this.setState({
            latitude: lat,
            longitude: long
        })
    }

    render() {
        return (
            <Row gutter={[8, 8]}>
                <Col span={8}>
                    <Card>
                        <List
                            dataSource={this.props.service.result}
                            renderItem={item => (
                                <List.Item
                                    actions={[<Button onClick={() => this.itemClick(item)}>พิกัด</Button>]}
                                >
                                    {item.animal_descover_date}
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={16}>
                    {"lat: "}  {this.state.latitude}
                    <br/>
                    {"long: "} {this.state.longitude}
                </Col>
            </Row>
        )
    }
}

const mapPropsToState = state => {
    return {
        service: state.serviceList
    }
}
export default connect(mapPropsToState)(TabHistory)