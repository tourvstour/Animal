import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarComponent from './component/Page/NavbarComponent'
import { Layout, Col, Row } from 'antd'

import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import RegiterPage from './page/RegiterPage'

const { Header, Content, Footer } = Layout;
const Pages = () =>
    (
        <div>
            <Header style={{ backgroundColor: '#fff' }}>
                <NavbarComponent />
            </Header>
            <br />
            <Content style={{ backgroundColor: '#fff' }}>
                <Col lg={{ span: 22, offset: 1 }}>
                    <Routing />
                </Col>
            </Content>
        </div>
    )
    
const Routing = () =>
    (
        <Router>
            <div>
                <Route exact path='/main' component={MainPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/regit' component={RegiterPage} />
            </div>
        </Router>
    )


export default Pages