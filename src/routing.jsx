import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavbarComponent from './component/Page/NavbarComponent'
import { Layout, Col, Row } from 'antd'
import lottieImg from './lottie/26093-loading-crazy-shapes.json'
import Lottie from 'react-lottie'

import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import RegiterPage from './page/RegiterPage'

const { Header, Content, Footer } = Layout;
const Pages = () => {
    return (
        <div>
            <Header style={{ backgroundColor: '#fff' }}>
                <NavbarComponent />
            </Header>
            <br />
            <Content style={{ backgroundColor: '#fff' }}>
                <Row justify={'space-around'}>
                    <Col lg={{ span: 22}} >
                        <Routing />
                    </Col>
                </Row>
            </Content>
        </div>
    )
}

const Routing = () =>
    (
        <Switch>
            <Route exact path='/main' component={MainPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/regit' component={RegiterPage} />
        </Switch>
    )


export default Pages