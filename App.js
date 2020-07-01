import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// components
import Header from "./components/header"

// screens
import LoginScreen from "./screens/LoginScreen"
import AdminDashboardScreen from "./screens/adminDashboardScreen"

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [isAdmin, setIsAdmin] = useState()

  const loginHandler = username => {
    setIsLoggedin(true)
    if(username === "admin"){
      setIsAdmin(true)
    }else{
      setIsAdmin(false)
    }
  }

  if(isLoggedin == false){
    content = <LoginScreen/>
  }else if (isLoggedin == true && isAdmin == ture){
    content = <AdminDashboardScreen/>
  }else if (isLoggedin == true && isAdmin == false){
    content = "general dashboard"
  }
  
  
  let content = <LoginScreen onLogin={loginHandler}/>
  return (
    <View style={styles.screen}>
      <Header title="Pi-NAS"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
