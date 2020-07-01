import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Input from "../components/Input"
import Card from "../components/Card"
import NumberContainer from "../components/NumberContainer"
import colors from "../constants/colors"


class loginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    login() {
        fetch('http://192.168.0.107:80/user/login')
            .then(res => res.json())
            .then(alldata_ => this.setState({ data: alldata_ }, () => console.log("successfully fetched alldata", alldata_)))
        console.log("fetched")
    }

    render() {
        return (
            <View style={styles.screen}>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" keyboardType="text" value={enteredUsernameValue}/>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" keyboardType="password" value={enteredPasswordValue}/>
                <Button style={styles.input} title="Login" onPress={login} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default loginScreen


