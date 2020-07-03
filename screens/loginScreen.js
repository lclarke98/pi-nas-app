"use strict"

import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import Input from "../components/Input"

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text>Please enter your login details</Text>
                <Input style={styles.input} placeholder="Enter username" blurOnSubmit autoCapitalize="none" keyboardType="default" value= {this.state.username} onChangeText={text => this.setState({username: text})} />
                <Input style={styles.input} placeholder="Enter password" blurOnSubmit autoCapitalize="none" keyboardType="default" value= {this.state.password} onChangeText={text => this.setState({password: text})} />
                <Button style={styles.input} title="Login" onPress={() => this.props.onLogin(this.state.username, this.state.password)} />
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

export default LoginScreen