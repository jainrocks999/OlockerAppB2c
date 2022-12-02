import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  Share,
  Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import colors from '../../../constant/colors';
const Productdetail = () => {
  const navigation = useNavigation();
  const [click, setClick] = useState(false);
  const click3 = () => {
    setClick(true);
  };
  const share = async () => {
    Share.share({
      message: `Product Name :  \nProduct Price :  \n Product Description : `,
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{height: 370, width: '100%'}}>
          <ImageBackground
            source={require('../../../Assets/images/product_detail.png')}
            resizeMode="stretch"
            style={styles.main}>
            <View style={styles.top}>
              <TouchableOpacity onPress={() => click3()} style={styles.circles}>
                <Icon
                  name="heart"
                  size={24}
                  color={click == true ? 'grey' : '#ed6660'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => share()} style={styles.circles}>
                <Icon name="share-google" size={24} color={'#ed6660'} />
              </TouchableOpacity>
            </View>
            <View style={{zIndex: 5, marginTop: -22}}>
              <SliderBox
                images={images}
                sliderBoxHeight={100}
                onCurrentImagePressed={index =>
                  console.warn(`image ${index} pressed`)
                }
                dotColor="#fddae8"
                inactiveDotColor="#cccccc"
                //    paginationBoxVerticalPadding={10}
                //   autoplay
                //   circleLoop
                //   resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                  position: 'absolute',
                  bottom: 0,
                  right: -5,
                  padding: 0,
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10,
                }}
                dotStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 8,
                  marginHorizontal: -9,
                  padding: 0,
                  margin: 0,
                  borderWidth: 2,
                  borderColor: '#fff',
                }}
                ImageComponentStyle={{
                  borderRadius: 100,
                  width: 200,
                  height: 200,
                  borderWidth: 4,
                  borderColor: '#fff',
                }}
                imageLoadingColor="#2196F3"
              />
            </View>
          </ImageBackground>
        </View>
        <View style={{alignItems: 'center', marginTop: -50}}>
          <Text style={styles.text2}>PRICE ON REQUEST</Text>
        </View>
        <View style={{padding: 10}}>
          <View style={styles.card1}>
            <View>
              <Text style={[styles.text1, {fontWeight: '700', fontSize: 14}]}>
                {'PRODUCT DESCRIPTION'}
              </Text>
            </View>
            <View style={{marginTop: 0}}>
              <View style={styles.cv}>
                <Text style={[styles.text1, {width: '22%'}]}>
                  {'Collection'}
                </Text>
                <Text style={[styles.text1, {marginLeft: 0, width: '6%'}]}>
                  {' '}
                  {':'}{' '}
                </Text>
                <TextInput
                  style={{height: 40, color: '#052a47', marginLeft: -10}}
                  placeholder="Bangles"
                  placeholderTextColor={colors.blue}
                />
              </View>
              <View style={[styles.cv, {marginTop: -20}]}>
                <Text style={[styles.text1, {width: '22%'}]}>{'Stock No'}</Text>
                <Text style={[styles.text1, {marginLeft: 0, width: '6%'}]}>
                  {' '}
                  {':'}{' '}
                </Text>
                <TextInput
                  style={{height: 40, color: '#052a47', marginLeft: -10}}
                  placeholder="EBGI"
                  placeholderTextColor={colors.blue}
                />
              </View>

              <View style={[styles.cv, {marginTop: -20}]}>
                <Text style={[styles.text1, {width: '22%'}]}>{'Metal'}</Text>
                <Text style={[styles.text1, {marginLeft: 0, width: '6%'}]}>
                  {' '}
                  {':'}{' '}
                </Text>
                <TextInput
                  style={{height: 40, color: '#052a47', marginLeft: -10}}
                  placeholder="Gold 916 - 93.00 Gms."
                  placeholderTextColor={colors.blue}
                />
              </View>

              <View style={[styles.cv, {marginTop: -20}]}>
                <Text style={[styles.text1, {width: '22%'}]}>{'Status'}</Text>
                <Text style={[styles.text1, {marginLeft: 0, width: '6%'}]}>
                  {' '}
                  {':'}{' '}
                </Text>
                <TextInput
                  style={{height: 40, color: '#052a47', marginLeft: -10}}
                  placeholder="Ready To Deliver "
                  placeholderTextColor={colors.blue}
                />
              </View>
            </View>
          </View>
          <View style={[styles.card1, {marginTop: 10}]}>
            <View style={{}}>
              <Text style={[styles.text1, {fontWeight: '700', fontSize: 14}]}>
                {'WHAT MAKES US STAND OUT'}
              </Text>
            </View>
            <View style={[styles.textT, {marginBottom: 10}]}>
              <View style={{width:'33.3%',alignItems:'center'}}>
                <Image style={{height:30,width:30}} source={require('../../../Assets/icon1/icon1.png')}/>
              <Text style={styles.textbt}>LOYALTY BENEFITS</Text>
              </View>
              <View style={{width:'33.3%',alignItems:'center'}}>
              <Image style={{height:30,width:30}} source={require('../../../Assets/icon1/icon2.png')}/>

              <Text style={styles.textbt}>{'    EMI AVAILABLE'}</Text>
              </View>
              <View style={{width:'33.3%',alignItems:'center'}}>
              <Image style={{height:30,width:30}} source={require('../../../Assets/icon1/icon3.png')}/>

              <Text style={styles.textbt}>FREE JEWELLERY INSURANCE</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomv}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btext}>ENQUIRE NOW</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{height: 15}} /> */}
      </ScrollView>
    </View>
  );
};
export default Productdetail;

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  // "https://source.unsplash.com/1024x768/?tree",
];
