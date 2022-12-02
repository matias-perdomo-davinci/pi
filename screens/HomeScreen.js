import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function HomeScreen(){
    return(
      <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(8,174,234,1)', 'transparent']}
        style={styles.background}
      />

        <Text style={styles.bienvenida} >Bienvenido a mi app!</Text>
        <Text style={styles.bienvenida} >Cotización Dolar Oficial</Text>
        <Image style={styles.Image} source={require("../assets/dollar.png")} />
        <Text style={styles.pie} >Desarrollo por Matias Perdomo</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#12CF78',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 500,
    },
    bienvenida: {
      fontSize:25,
      color:"#ffffff",
      fontWeight:"bold",
      paddingBottom:"3%",
    },
    pie: {
      fontSize:18,
      color:"#ffffff",
      fontWeight:"bold",
      paddingTop:"30%",
    },
    Image: {
      height:"40%",
      width: "70%",
    },
});

module.exports = HomeScreen;