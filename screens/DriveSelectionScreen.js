import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Input from "../components/Input"

class DriveSelectionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text>This is the admin page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default DriveSelectionScreen


