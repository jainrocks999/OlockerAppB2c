import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import styles from './styles';
import StoreBottm from '../../../Component/StoreBottomTab';
import {useNavigation} from '@react-navigation/native';

const Loyalty = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          {/* <View style={{borderWidth:0.2}}/> */}
          <FlatList
            data={DATA}
            horizontal={false}
            renderItem={({item, index}) => (
              <View
                onPress={() => navigation.navigate('alldeal')}
                style={styles.cardview}>
                <View style={styles.circleview}>
                  <View style={styles.circle}>
                    <Image
                      style={styles.img}
                      source={require('../../../Assets/images/notification.png')}
                    />
                  </View>
                  <View style={styles.textview}>
                    <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                  </View>
                  <Text style={{fontSize: 11, marginTop: -10}}>
                    23 Feb 2021
                  </Text>
                </View>

                <View
                  style={{
                    borderWidth: 0.5,
                    marginTop: 0,
                    borderColor: '#cccccc',
                  }}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
      <StoreBottm />
    </SafeAreaView>
  );
};
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
