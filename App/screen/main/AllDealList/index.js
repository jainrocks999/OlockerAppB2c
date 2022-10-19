import React from "react";
import { View,Text, SafeAreaView,TouchableOpacity ,FlatList,Image} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import StoreBottom from '../../../Component/StoreBottomTab'
import { ScrollView } from "native-base";
const Loyalty =()=>{
  const navigation =useNavigation();
return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.main}/> 
      <View style={styles.main1}>
      
      <View style={styles.card2}>
        <View style={styles.view1}>
         <Text>All Deals</Text> 
         <View style={{height:50,width:100,alignSelf:'flex-end'}}>
         <Image style={{height:'100%',width:'100%'}} resizeMode="center" source={require('../../../Assets/images/grabon_icon.png')}/>
         </View>
      </View>
        <FlatList
            showsHorizontalScrollIndicator={true}
            // horizontal={true}
            data={DATA}
            style={styles.list}
           
            renderItem={({item}) => (
               
             <View style={styles.itemv}>
               
               <View style={styles.circle}>
                 <Image style={{height:'100%',width:'100%' ,borderRadius:40}}
                 source={require('../../../Assets/images/deal_logohome2.jpg')}/>
               </View>
              <TouchableOpacity
                 onPress={()=>navigation.navigate('Dealdetail')}
                style={styles.cardview}>
                  <Text style={{marginLeft:40}}>{item.id}</Text>
               </TouchableOpacity>
              

              </View>
            )}
          />
        </View> 
      </View>
      </ScrollView>
      <StoreBottom/>
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