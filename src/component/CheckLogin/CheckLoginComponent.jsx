import React from 'react'
import { connect } from 'react-redux'
import { Cookies, withCookies } from 'react-cookie'
import { Button, Modal } from 'antd'
import { Link } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        propsData: state
    }
}
const warning = () => {
    Modal.warning({
        title: 'Loging',
        content: 'เข้าสู่ะบบก่อนใช้งาน',
    })
}

class CheckLoginComponent extends React.Component {

  componentWillReceiveProps(){
      console.log('')
  }

    render() {
        return (
            <div>
                <Button>555</Button>
            </div>
        )
    }
}

export default withCookies(connect(mapStateToProps)(CheckLoginComponent))