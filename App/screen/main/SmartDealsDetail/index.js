import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView,Image,Dimensions,Share} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StoreBottom from '../../../Component/StoreBottomTab'
import styles from './styles';


const MyProducts = () => {
    const navigation=useNavigation()
    
  
  const win = Dimensions.get('window');
  
  
  return (
    <View style={styles.container}>
     
      <ScrollView>
       
        {/* <View style={styles.main}>
         
        </View> */}
        <View style={styles.card}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item,index}) => (
              <TouchableOpacity 
              // onPress={()=>navigation.navigate('productdetail')}
                 onPress={()=>navigation.navigate('alldeal')}
                style={styles.cardview}>
             
                 <Image style={{height:'100%',width:'100%',borderRadius:10}}
                 source={require('../../../Assets/images/womenjewellery.jpg')}/>
                  </TouchableOpacity>
               
         
            )}
          />
        </View>
        <View style={{height: 70}} />
      </ScrollView>
      <StoreBottom/>
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

