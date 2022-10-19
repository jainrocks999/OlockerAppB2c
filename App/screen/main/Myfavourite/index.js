import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";
import StoreBottomTab from '../../../Component/StoreBottomTab'

const Loyalty =()=>{
return(
    <SafeAreaView style={styles.container}>
        <ScrollView style={{flex:1}}>   
              <View >

     </View>
     </ScrollView>

     <StoreBottomTab/>
    </SafeAreaView>
)
}
export default Loyalty;