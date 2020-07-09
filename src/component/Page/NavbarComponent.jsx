import React from 'react'
import CheckLoginComponent from '../CheckLogin/CheckLoginComponent'
import { connect } from 'react-redux'
import { Menu, Layout, Modal } from 'antd'
import { Link, withRouter } from 'react-router-dom'

const { Header } = Layout
const { SubMenu } = Menu
const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
class NavbarComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            key: ''
        }
    }
    MenuRouter = (e) => {
        let part = e.key
        this.setState({
            key: part
        })
    }

    render() {
        return (
            <Header style={{ backgroundColor: '#fff' }}>
                <div style={{
                    width: '120px',
                    height: '31px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    float: 'right'
                }}>
                    <CheckLoginComponent nameProps={this.state.key} />
                </div>
                <Menu onClick={this.MenuRouter} mode="horizontal" theme="light" >
                    <Menu.Item key="/main" >
                        <Link to='/main'>
                            {"หน้าหลัก"}
                        </Link>
                    </Menu.Item>
                    <SubMenu title="บันทึกข้อมูล">
                        <Menu.ItemGroup >
                            <Menu.Item key="/animal_regit">
                                <Link to="/animal_regit">{'ลงทะเบียนสัตว์ป่า'}</Link>
                            </Menu.Item>
                            <Menu.Item key="/animal_survey">
                                <Link to="/animal_survey">{'บันทึกการพบเจอสัตว์ป่า'}</Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="/login" >
                        <Link to="/login">
                            {"เข้าสู่ระบบ"}
                        </Link>
                    </Menu.Item>
                </Menu>

            </Header>
        )
    }
}

export default withRouter(connect(mapStateToProps)(NavbarComponent))