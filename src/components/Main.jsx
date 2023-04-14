import React from 'react'
import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import AppBar from './AppBar.jsx'
import LogInPage from '../pages/Login.jsx'

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path='/' exact element={<></>}/>
                <Route path='/signin' exact element={<LogInPage/>}/>
            </Routes>
        </View>
    )
}

export default Main