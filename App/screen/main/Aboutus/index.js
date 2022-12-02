import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import StoreBottom from '../../../Component/StoreBottomTab';
const Loyalty = () => {
  const navigation = useNavigation();
  const link = [];
  const openGps = () => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${20.7679},${76.8718}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
    openExternalApp(url);
  };

  const openExternalApp = url => {
    console.log('maps wewe   ....', Linking.canOpenURL(url));
    Linking.canOpenURL(url).then(supported => {
      console.log('maps    ....', supported, url);
      Linking.openURL(url);

      // if (supported) {

      //   Linking.openURL(url);
      // } else {
      //   console.log('Don\'t know how to open URI: ' + url);
      // }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 10, marginTop: 10}}>
        <View style={styles.main}>
          <View style={styles.main1}>
            <Image
              style={{height: 100, width: 100}}
              source={require('../../../Assets/images/ring.png')}
            />
          </View>

          <View style={styles.view1}>
            <ImageBackground
              style={styles.imgbcg}
              source={require('../../../Assets/images/about_bg.png')}>
              <Text style={styles.textV}>{' About us'}</Text>
            </ImageBackground>
          </View>
          <View style={{paddingHorizontal: 10, marginTop: -30}}>
            <Text>
              {
                'Established in the year 1972, Mangal Jewellers in Sion Koliwada, Mumbai is a top player in the category Jewellery Showrooms in the Mumbai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mumbai. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.'
              }
            </Text>
          </View>
          <View style={styles.view1}>
            <ImageBackground
              style={styles.imgbcg}
              source={require('../../../Assets/images/about_bg.png')}>
              <Text style={styles.textV}>{'Our Team'}</Text>
            </ImageBackground>
          </View>
          <View style={{alignItems: 'center', marginTop: -35}}>
            <View style={styles.card}>
              <View style={styles.circle} />
              <TouchableOpacity style={styles.cardview}></TouchableOpacity>
            </View>
          </View>
          <View style={styles.view1}>
            <ImageBackground
              style={styles.imgbcg}
              source={require('../../../Assets/images/about_bg.png')}>
              <Text style={styles.textV}>{'Conatct Details'}</Text>
            </ImageBackground>
          </View>
          <View style={{paddingHorizontal: 10, marginTop: -40}}>
            <View style={[styles.card, {marginTop: 10}]}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'mailto:mangalsion@gmail.com?subject=sendmail&body=details',
                  )
                }>
                <Icon2 name="email-outline" size={25} color={'red'} />
              </TouchableOpacity>
              <Text style={styles.text1}>mangalsion@gmail.com</Text>
            </View>
            <View style={[styles.card, {marginTop: 10}]}>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:${9907121321}`)}>
                <Icon1 name="phone-call" size={25} color={'red'} />
              </TouchableOpacity>
              <Text style={styles.text1}>8356083413</Text>
            </View>
            <View style={[styles.card, {marginTop: 10}]}>
              <TouchableOpacity
                onPress={() => openGps()}>
                <Icon name="md-location-outline" size={25} color={'red'} />
              </TouchableOpacity>
              <Text style={styles.text1}>Mumbai maharastra</Text>
            </View>
          </View>
          <View style={styles.view1}>
            <ImageBackground
              style={styles.imgbcg}
              source={require('../../../Assets/images/about_bg.png')}>
              <Text style={styles.textV}>{'Showroom Gallery'}</Text>
            </ImageBackground>
          </View>
          <View style={styles.gallery}></View>
          <View style={{height: 20}} />
        </View>
        <View style={{height: 20}} />
      </ScrollView>
      <StoreBottom />
    </SafeAreaView>
  );
};
export default Loyalty;
