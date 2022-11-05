import React from "react";
import { View,Text, SafeAreaView, ScrollView} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import StoreBottomTab from '../../../Component/StoreBottomTab'

const Loyalty =()=>{
    const navigation=useNavigation()
return(
    <SafeAreaView style={styles.container}>
        <ScrollView style={{flex:1}}>   
              <View >
             <Text>{''}</Text>
     </View>
     </ScrollView>

     <StoreBottomTab/>
    </SafeAreaView>
)
}
export default Loyalty;