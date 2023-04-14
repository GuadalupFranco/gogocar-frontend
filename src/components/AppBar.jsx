import React from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import Constants from 'expo-constants'
import StyledText from './StyledText.jsx'
import theme from '../theme.js'

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()

    const active = pathname === to

    const textStyles = [
        styles.text, 
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                { children }
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>GoGoCar</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
                
            </ScrollView>
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    }
})