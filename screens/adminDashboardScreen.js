import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Input from "../components/Input"

class adminDashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    render() {
        return (
            <View style={styles.screen}>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" keyboardType="text" value={enteredUsernameValue}/>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" keyboardType="password" value={enteredPasswordValue}/>
                <Button style={styles.input} title="Login" onPress={login} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default adminDashboardScreen


