import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Input from "../components/Input"

class adminDashboardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    login() {
        fetch('http://192.168.0.107:80/user/info?userID=' + this.props.userID)
            .then(res => res.json())
            .then(alldata_ => this.setState({ loginData: alldata_ }, () => console.log("successfully fetched alldata", alldata_)))
            if(0 > 1){
                Alert.alert("Incorrect username or password", [{ text: "Okay", style: "destructive" }])
            }else{
                //this.props.onLogin("admin")

            }
    }

    render() {
        return (
            <View style={styles.screen}>
                <Button title="Back" onPress={this.props.backToAdminDashboard}/>
                <Text>This is the admin page {this.props.userID}</Text>
                <Button title="User Settings" onPress={this.props.openUserSettings}/>
                <Button title="Drive Settings" onPress={this.props.openDriveSettings}/>
                <Button title="File Manager" onPress={this.props.openFileManager}/>
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


