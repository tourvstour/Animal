import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
const { SubMenu } = Menu
const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
class NavbarComponent extends React.Component {

    MenuRouter = (e) => {
        let part = e.key
        //  window.location.href = part
    }

   
    render() {
        return (
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
        )
    }
}

export default withRouter(connect(mapStateToProps)(NavbarComponent))