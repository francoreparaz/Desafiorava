import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-elements";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";

function Detail({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  var min=navigation.getParam("min");
  var max=navigation.getParam("max");
  var apertura=navigation.getParam("apertura");
  var ultimo=navigation.getParam("ultimo");
  const data = {
    datasets: [
      {
        data: [apertura,min,max,ultimo],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    
  };
  const chartConfig = {
      
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 5,
    backgroundGradientTo: "#000000",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(20, 255, 140, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const simbolo = navigation.getParam("simbolo");

  return (
    <View  style={{ height:"100%", backgroundColor:"gray"}}>
      <Text style={{margin:50,display:"flex", alignSelf:"center", color:"white"}}>{simbolo}</Text>
     <LineChart
  data={data}
  width={screenWidth}
  height={300}
  verticalLabelRotation={30}
  chartConfig={chartConfig}
  
/>

    </View>
  );
}

export default Detail;
