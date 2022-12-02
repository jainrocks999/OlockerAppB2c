import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import StoreBottom from '../../../Component/StoreBottomTab';
import colors from '../../../constant/colors';
const Loyalty = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.main}
          source={require('../../../Assets/images/deal_bg.png')}
        />
        <View style={styles.main1}>
          <View style={styles.card2}>
            <View style={styles.view1}>
              <Text
                style={{color: colors.blue, fontWeight: '500', marginLeft: -5,marginTop:5}}>
                All Deals
              </Text>
              <View>
                <View style={{alignSelf: 'flex-end', marginRight: 0}}>
                  <Text
                    style={{
                      color: colors.blue,
                      textAlign: 'right',
                      fontWeight: '500',
                    }}>
                    Deal Partner
                  </Text>
                </View>
                <View
                  style={{
                    height: 21,
                    width: 100,
                    alignSelf: 'flex-end',
                    marginRight: 0,
                  }}>
                  <Image
                    style={{height: '100%', width: '100%'}}
                    source={require('../../../Assets/images/grabon_icon.png')}
                  />
                </View>
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
                    <Image
                      style={{height: '100%', width: '100%', borderRadius: 40}}
                      source={require('../../../Assets/images/deal_logohome1.jpg')}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Dealdetail')}
                    style={styles.cardview}>
                    <Text style={{marginLeft: 40}}>{item.id}</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
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
