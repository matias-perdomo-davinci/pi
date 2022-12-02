import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomeButton';
import { LinearGradient } from 'expo-linear-gradient';

const axios = require ('axios').default;

function DetailsScreen(){
    const [fecha, setFecha] = React.useState(null);
    const [compra, setCompra] = React.useState(null);
    const [venta, setVenta] = React.useState(null);

    function pegarApi(){

   
        axios.get("https://api-dolar-argentina.herokuapp.com/api/dolaroficial")
        .then(function(resp){
          let fecha = resp.data.fecha
          let compra = resp.data.compra
          let venta = resp.data.venta
          setFecha(fecha);
          setCompra(compra);
          setVenta(venta);
           console.log(fecha);
           console.log(compra);
           console.log(venta);
        })
        .catch(function(err){
            console.log(err);
        })
      }
    
      return (
        <View style={styles.container}>

        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(8,174,234,1)', 'transparent']}
          style={styles.background}
        />


          <Text style={styles.titulo}>Cotización Dolar Oficial</Text>
          <CustomButton onPress={() => pegarApi()} title = 'ACTUALIZAR VALOR'/>
          
          <Text style={styles.titulo}>Fecha Cotización:</Text>
          {fecha!= null ? <Text style={styles.texto} >{fecha}</Text> : null} 
          <Text style={styles.titulo}>Precio Compra:</Text>
          {compra!= null ? <Text style={styles.texto}>${compra}</Text> : null} 
          <Text style={styles.titulo}>Precio Venta:</Text>
          {venta!= null ? <Text style={styles.texto}>${venta}</Text> : null} 
    
          <StatusBar style="auto" />
        </View>
      );
 
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#12CF78',
        alignItems: 'center',
        justifyContent: 'center',
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
        paddingBottom:"5%",
      },
      titulo:{
        color:"#ffffff",
        fontSize: 25,
        fontWeight:"bold",
      },
      texto:{
        color:"#ffffff",
        fontSize: 20,
      },
});


module.exports = DetailsScreen;