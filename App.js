import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

// components
import Header from "./components/header"

// screens
import LoginScreen from "./screens/LoginScreen"
import AdminDashboardScreen from "./screens/adminDashboardScreen"
import DriveSelectionScreen from "./screens/DriveSelectionScreen"

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [isAdmin, setIsAdmin] = useState()
  const [userID, setUserID] = useState("")

  const loginHandler = (username, password) => {
    console.log("handler called")
    //let url = "http://192.168.0.107:80/user/login?username=" + username + "&password=" + password 
    //console.log(url)
    fetch("http://192.168.0.107:80/user/login?username=" + username + "&password=" + password)
      .then(res => res.json(), () => setUserID(res.user_ID))
    //.then(res => setUserID(res.user_ID))
    console.log(userID)
    if (userID === "") {
      //Alert.alert("Incorrect username or password", [{ text: "Okay", style: "cancel" }])
      console.log("incorrect")
    } else {
      setIsLoggedin(true)
      if (username === "admin") {
        setIsAdmin(true)
        console.log("admin is true")
      } else {
        setIsAdmin(false)
      }
    }
  }

  const userSettingsHandler = () =>{
    console.log("open user settings")
  }

  const driveSettingsHandler = () =>{
    console.log("open user settings")
  }

  const fileManagerHandler = () =>{
    console.log("open user settings")
  }

  const backToAdminDashboard = () =>{
    content = <AdminDashboardScreen userID={userID} backToAdminDashboard={backToAdminDashboard} openUserSettings={userSettingsHandler} openDriveSettings={driveSettingsHandler} openFileManager={fileManagerHandler} />
  }

  let content = <LoginScreen onLogin={loginHandler} />

  if (isLoggedin == false) {
    content = <LoginScreen onLogin={loginHandler} />
    console.log("no login")
  } else if (isLoggedin == true && isAdmin == true) {
    content = <AdminDashboardScreen userID={userID} openUserSettings={userSettingsHandler} openDriveSettings={driveSettingsHandler} openFileManager={fileManagerHandler} />
    console.log("is admin", + userID)
  } else if (isLoggedin == true && isAdmin == false) {
    <DriveSelectionScreen userID={userID} />
    console.log("normal user")
  }


  return (
    <View style={styles.screen}>
      <Header title="Pi-NAS" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
