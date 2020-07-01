import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import Input from "../components/Input"

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            loginData: []
        }
    }

    login() {
        fetch('http://192.168.0.107:80/user/login')
            .then(res => res.json())
            .then(alldata_ => this.setState({ loginData: alldata_ }, () => console.log("successfully fetched alldata", alldata_)))
            if(data == null){
                Alert.alert("Incorrect username or password", [{ text: "Okay", style: "destructive" }])
            }else{
                this.props.onLogin(data.username)
            }
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text>Please enter your login details</Text>
                <Input style={styles.input} placeholder="Enter username" blurOnSubmit autoCapitalize="none" keyboardType="default" onChangeText={text => this.setState({ username: text })} />
                <Input style={styles.input} placeholder="Enter password" blurOnSubmit autoCapitalize="none" keyboardType="default" onChangeText={text => this.setState({ password: text })} />
                <Button style={styles.input} title="Login" onPress={this.login} />
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


