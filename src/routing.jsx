import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavbarComponent from './component/NavbarPage/NavbarComponent'
import { Layout, Col, Row } from 'antd'

import MainPage from './page/MainPage'
import LoginPage from './page/LoginPage'
import RegiterPage from './page/RegiterPage'

import AnimalRegiterPage from './page/AnimalRegiterPage'
import AnimalServeyPage from './page/AnimalServeyPage'


const { Header, Content } = Layout;

const Pages = () =>
    (
        <div>
            <div style={{ padding: 5 }}>
                <NavbarComponent />
            </div>
            <Content style={{ backgroundColor: '#fff', }}>
                <Row justify={'center'}>
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
            <Route path='/animal_survey' component={AnimalServeyPage} />
        </Switch>
    )



export default Pages