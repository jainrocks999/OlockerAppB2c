import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { HStack,Box,Switch } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

const Loyalty =()=>{
return(
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
      <View style={{borderWidth:0.2}}/>
          <FlatList
            data={DATA}
          horizontal={false}
            renderItem={({item,index}) => (
              <View onPress={()=>navigation.navigate('alldeal')}
                style={styles.cardview}>
             <View style={{paddingHorizontal:10}}>
                 <Text>{item.title}</Text>
                 </View>
                 <View style={{borderWidth:0.2,marginTop:10}}/>
                  </View>
               
         
            )}
          />
        </View>
    </SafeAreaView>
)
}
export default Loyalty;
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];