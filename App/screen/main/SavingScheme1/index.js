import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {HStack, Box, Switch} from 'native-base';
import {SliderBox} from 'react-native-image-slider-box';
import {useNavigation} from '@react-navigation/native';
import StoreBottomTab from '../../../Component/StoreBottomTab';
import colors from '../../../constant/colors';

const Loyalty = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View>
          <SliderBox
            images={images}
            sliderBoxHeight={150}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor="#3880ff"
            inactiveDotColor="#90A4AE"
            //    paginationBoxVerticalPadding={10}
            autoplay
            circleLoop
            //   resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              right: 0,
              // alignItems: "center",
              // alignSelf: "center",
              // justifyContent: "center",
              paddingVertical: 0,
            }}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 8,
              marginHorizontal: -9,
              padding: 0,
              margin: 5,
              borderWidth: 1.5,
              borderColor: '#fff',

              backgroundColor: '',
            }}
            ImageComponentStyle={{borderRadius: 15, width: '98%', marginTop: 0}}
            imageLoadingColor="#2196F3"
          />
        </View>
      </ScrollView>

      {/* <StoreBottomTab/> */}
    </SafeAreaView>
  );
};
export default Loyalty;
const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];
