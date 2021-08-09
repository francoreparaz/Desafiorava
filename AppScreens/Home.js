import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {StyleSheet, View,Button, ScrollView,} from "react-native";
import { Text } from "react-native-elements";
import axios from "axios";
import { useState } from "react";


function Home({navigation}) {
  const [data, setData] = useState([]);
  
  const params = new URLSearchParams();
  params.append("panel", "LID");

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  useEffect(() => {
    axios
      .post(
        "https://www.rava.com/lib/restapi/v0/publico/cotizaciones/ultimos",
        params,
        config
      )
      .then((result) => {
        setData(result.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  
 
  return (
    <ScrollView>
      <View style={styles.nav}> 
      <Text style={styles.text}>Especie</Text>
      <Text style={styles.text}>Último</Text>
      <Text style={styles.text}>Variación</Text>
      <Text style={styles.text}>Hora</Text>
      
      </View>
      <View style={styles.apiContent}>
       {
         data&&data.map(x=>(
           
           <View key={x.especie} style={{display:"flex",flexDirection:"row"}}>
             
           <View style={styles.button}>
           <Button title={x.especie} onPress={()=>navigation.navigate("Detail",{
            simbolo:x.simbolo,
            min:x.minimo,
            max:x.maximo,
            apertura:x.apertura,
            ultimo:x.ultimo
           })}/>
           
           </View>
           <Text style={styles.ultimo}>{x.ultimo}</Text>
           <Text style={styles.variacion}>{x.variacion?x.variacion:0}</Text>
           <Text style={styles.hora}>{x.hora}</Text>
           </View>
         ))
       }
      </View>
    </ScrollView>

   );
 }

 const styles = StyleSheet.create({
  nav:{
    display:"flex",
    backgroundColor:"blue",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:"2%",
    height:"2%",
    margin:"0.5%",
    borderRadius:5
  },
  text:{
   color:"white",
   marginTop:10,
   margin:2,
  },
  apiContent:{
    position:"relative",
    backgroundColor:"gray",
    height:"100%",
    margin:2,
    marginBottom:"10%"
  },
  button:{
    width:"25%",
    padding:"0.5%",
    marginTop:"2%"
    
  },
  ultimo:{
    marginLeft:"7%",
    marginTop:"5%"

  },
  variacion:{
    marginLeft:"20%",
    marginTop:"5%"
  },
hora:{
  marginLeft:"15%",
    marginTop:"5%"
}  
});




export default Home;
