import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import colors from "../constants/colors"

const logout = () => {
    console.log("logout")
}

const Header = props =>{
    return(
        <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <Button title="Logout" onPress={logout}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: 90,
        paddingTop:36,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle:{
        color: "black",
        fontSize: 18,
    }
})


export default Header