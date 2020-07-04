import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'antd'

const { SubMenu } = Menu
const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
class NavbarComponent extends React.Component {

    MenuRouter = (e) => {
        let part = e.key
        window.location.href = part
    }

    render() {
        return (
            <Menu onClick={this.MenuRouter} mode="horizontal" theme="light" >
                <Menu.Item key="/main" >
                    หน้าหลัก
                </Menu.Item>
                <SubMenu title="บันทึกข้อมูล">
                    <Menu.ItemGroup >
                        <Menu.Item key="/animal_regit">ลงทะเบียนสัตว์ป่า</Menu.Item>
                        <Menu.Item key="/animal_survey">บันทึกการพบเจอสัตว์ป่า</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="/login" >
                    เข้าสู่ระบบ
                </Menu.Item>
            </Menu>
        )
    }
}

export default connect(mapStateToProps)(NavbarComponent)