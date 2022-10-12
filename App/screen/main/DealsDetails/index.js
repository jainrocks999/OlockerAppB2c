import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty =()=>{
  const navigation =useNavigation()
return(
    <SafeAreaView style={styles.container}>
     <View style={styles.main}>
      <View>   
     <Text style={styles.text}>{'welcome to clear trip \n get up to Rs. 2100 off on Domestic flights '}</Text>
     <Text style={styles.text}>{'welcome to clear trip \n get up to Rs. 2100 off on Domestic flights '}</Text>
     </View>
     <View  style={styles.buttonView}>

               <TouchableOpacity 
                          onPress={()=>navigation.navigate("Notification")}
                        style={styles.button}>
                      <Text style={{color: '#fff'}}>Copy to Data</Text>
                 </TouchableOpacity>
                 </View>
     </View>
    </SafeAreaView>
)
}
export default Loyalty;

