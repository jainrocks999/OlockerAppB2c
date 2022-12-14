import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';
import colors from '../../../constant/colors';
import {useNavigation} from '@react-navigation/native';
import StoreBottom from '../../../Component/StoreBottomTab';
const Loyalty = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={[styles.title, {marginTop: 5}]}>
            Mangal Jewellers, Sion
          </Text>
          <View style={styles.main1}>
            <View style={styles.circle}>
              <Image
                style={{height: '100%', width: '100%', borderRadius: 60}}
                source={require('../../../Assets/images/deal_logohome1.jpg')}
              />
            </View>

            <View style={styles.card}>
              <View style={{alignSelf: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.circle1, {backgroundColor: colors.btcolor}]}>
                  <Text style={styles.title}>100</Text>
                </TouchableOpacity>
                <Text
                  style={[styles.title1, {color: colors.blue, marginTop: 10}]}>
                  TOTAL POINTS
                </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <Text
                  style={[
                    styles.title1,
                    {color: colors.blue, marginTop: -5, marginRight: 10},
                  ]}>
                  REDEEMED
                </Text>
                <Text
                  style={[
                    styles.title1,
                    {color: colors.btcolor, marginTop: 5, marginRight: 16},
                  ]}>
                  0
                </Text>
              </View>
              <View style={{alignSelf: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.circle1, {backgroundColor: colors.btcolor}]}>
                  <Text style={styles.title}>100</Text>
                </TouchableOpacity>
                <Text
                  style={[styles.title1, {color: colors.blue, marginTop: 10}]}>
                  REMAINING
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.view3}>
          <ImageBackground
            source={require('../../../Assets/images/loyalty_bg.png')}
            style={styles.view}>
            <Text style={styles.textV}>Points earned summary</Text>
          </ImageBackground>
        </View>
        <View style={styles.main}>
          <View style={styles.card1}>
            <View style={styles.bottomv}>
              <View
                style={[
                  styles.bottomv2,
                  {
                    backgroundColor: '#fddac0',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  },
                ]}>
                <Text
                  style={{fontSize: 12, marginLeft: 10, color: colors.blue}}>
                  Date
                </Text>
                <Text style={{fontSize: 12, color: colors.blue}}>Points</Text>
                <Text style={{fontSize: 12, color: colors.blue}}>
                  Occassion
                </Text>
                <Text style={{fontSize: 12, color: colors.blue}}>
                  Expiry date
                </Text>
              </View>
              <View style={[styles.bottomv2,{paddingHorizontal:14}]}>
                <Text style={{fontSize: 10}}>23-09-2022</Text>
                <Text style={{fontSize: 10, marginLeft: -25}}>100</Text>
                <Text style={{fontSize: 10, marginLeft: 10}}>Download</Text>
                <Text style={{fontSize: 10, marginLeft: 0}}>23-05-2032</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 10,
                  alignSelf: 'flex-start',
                  fontWeight: '700',
                  fontSize: 14,
                },
              ]}>
              * Note :
            </Text>
            <Text
              style={[
                styles.title,
                {marginTop: 10, alignSelf: 'flex-start', fontSize: 14},
              ]}>
              {' '}
              1 Loyalty Point = 1 INR
            </Text>
          </View>
        </View>
      </ScrollView>
      <StoreBottom />
    </SafeAreaView>
  );
};
export default Loyalty;
