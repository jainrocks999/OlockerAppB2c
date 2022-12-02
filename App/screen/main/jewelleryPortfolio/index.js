import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import StoreBottom from '../../../Component/StoreBottomTab';
const Loyalty = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../../Assets/images/ornament.png')}
          style={styles.main}
        />

        <View style={styles.card2}>
          <FlatList
            showsHorizontalScrollIndicator={true}
            // horizontal={true}
            data={DATA}
            style={styles.list}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.cardview}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 0,alignItems:'center',
                  }}>
                  <Text style={styles.text}>{item.title}</Text>
                  {index === 0 ? null : (
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        color: '#92525c',
                      }}>
                      VIEW ALL
                    </Text>
                  )}
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{marginTop: 10}}>{'Number of items'}</Text>
                  <Text style={{marginTop: 10}}>{'0'}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 13,
                  }}>
                  <Text style={{marginTop: 0}}>{'Insured Input value'}</Text>
                  <Text style={{marginTop: 0}}>{'₹ 0.00'}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('addnewuser')}
              style={styles.button}>
              <Text style={{color: '#fff', fontFamily: 'Acephimere'}}>
                ADD NEW JEWELLERY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StoreBottom />
    </SafeAreaView>
  );
};
export default Loyalty;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Total Jewellery portfolio',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'My Insured Jewellery',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'My Uninsured Jewellery',
  },
];
