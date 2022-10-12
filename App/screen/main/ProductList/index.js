import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView,Image,Dimensions,Share} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon  from 'react-native-vector-icons/Fontisto';
import styles from './styles';


const MyProducts = () => {
    const navigation=useNavigation()
    const[low,setLow]=useState(true);
    const[high,setHig]=useState(false);

    const manage =()=>{
      setLow(true);
      setHig(false);
    }
    const manage1 =()=>{
      setLow(false);
      setHig(true);
    }
  
  const win = Dimensions.get('window');
  
  
  return (
    <View style={styles.container}>
     
      <ScrollView>
       
        <View style={styles.main}>
         <View style={[styles.card1,{backgroundColor:'#fff'}]}>
         <Image style={styles.img}  source={require('../../../Assets/Image/updown.png')}/>
           <Text style={styles.textcard}>SHORT BY PRICE</Text>
         </View>
         <View style={styles.card1}>
          <TouchableOpacity onPress={()=>manage()}
          style={[styles.touch,{backgroundColor:low?'white':'green'}]}>
             <Text style={[styles.text,{color:low?'green':"white"}]}>Low</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>manage1()}
          style={[styles.touch,{backgroundColor:high?'white':'green'}]}>
          <Text style={[styles.text,{color:high?'green':"white"}]}>High</Text>
        </TouchableOpacity>
         </View>
        </View>
        <View style={styles.card}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item,index}) => (
              <TouchableOpacity 
              onPress={()=>navigation.navigate('productdetail')}
                // onPress={()=>navigation.navigate('alldeal')}
                style={styles.cardview}>
             
                 
                  </TouchableOpacity>
               
         
            )}
          />
        </View>
        <View style={{height: 70}} />
      </ScrollView>
    </View>
  );
};
export default MyProducts;
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

