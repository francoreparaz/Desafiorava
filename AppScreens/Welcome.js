import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button,ScrollView,ImageBackground } from "react-native";
import { Text } from 'react-native-elements';
function Welcome({navigation}) {
    return (
        <ScrollView>

        <View style={styles.container}>
        <ImageBackground style={styles.image} source={require("../assets/bolsa.jpg")}>
      
        {/* <Text style={styles.text} numberOfLines={1} h4>Conviértete en un Profesional</Text> */}
        
        
   
       <View style={{flex:1, marginTop:550}}>
       <View style={{margin:20,marginTop:100,width:380}}>
        <Button
          onPress={() => navigation.navigate("Home")}
          title="Start"
          color="red"
          
          />
          </View>
         
          </View>
          
  </ImageBackground>
      </View>
</ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    
    },
    text:{
      color:"black",
      alignItems:"center",
      margin:15,
      // marginLeft:55,
      // marginTop:50,
      
     
    },
    image:{
      flex: 1,
      width:420,
      height:1000,
     justifyContent: "center"
    }
  });
  

export default Welcome
