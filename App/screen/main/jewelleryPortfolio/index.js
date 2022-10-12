import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList, ScrollView} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Loyalty =()=>{
  const navigation =useNavigation();
return(
    <SafeAreaView style={styles.container}>
      <View style={styles.main}/> 
      <View style={styles.main1}>
      
      <View style={styles.card2}>
        <FlatList
            showsHorizontalScrollIndicator={true}
            // horizontal={true}
            data={DATA}
            style={styles.list}
           
            renderItem={({item}) => (
               
              
              <TouchableOpacity
                style={styles.cardview}>
                 <Text style={styles.text}>{item.title}</Text>
               </TouchableOpacity>
              
            )}
          />
          <View  style={styles.buttonView}>

<TouchableOpacity 
         //   onPress={()=>navigation.navigate("otp")}
         style={styles.button}>
       <Text style={{color: '#fff'}}>ADD NEW JEWELLERY</Text>
  </TouchableOpacity>
  </View>
        </View> 
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