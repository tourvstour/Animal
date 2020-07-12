import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavbarComponent from './component/Page/NavbarComponent'
import { Layout, Col, Row } from 'antd'

import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import RegiterPage from './page/RegiterPage'

import AnimalRegiterPage from './page/AnimalRegiterPage'


const { Header, Content, Footer } = Layout;

const Pages = () =>
    (
        <div>
            <NavbarComponent />
            <br />
            <Content style={{ backgroundColor: '#fff' }}>
                <Row justify={'space-around'}>
                    <Col lg={{ span: 22 }} >
                        <Routing />
                    </Col>
                </Row>
            </Content>
        </div>
    )


const Routing = () =>
    (
        <Switch>
            <Route exact path='/main' component={MainPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/regit' component={RegiterPage} />
            <Route path='/animal_regit' component={AnimalRegiterPage} />
        </Switch>
    )



export default Pages