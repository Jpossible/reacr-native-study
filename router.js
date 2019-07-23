import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Home from './homepage';
import SubPage from  './components/subPage'

export default class ProFileView extends React.Component{
    render(): React.ReactNode {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home"
                           component={Home}
                           title="home"
                           hideNavBar={false}
                    ></Scene>
                    <Scene key="subPage"
                           component={SubPage}
                           title="SubPage"
                    ></Scene>
                </Stack>
            </Router>
        )
    }
}
