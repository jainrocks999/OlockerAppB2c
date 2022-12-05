import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  Share,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

const MyProducts = () => {
  const navigation = useNavigation();
  const [low, setLow] = useState(true);
  const [high, setHig] = useState(false);
  const [liked, setLiked] = useState([]);
  const share1 = async () => {
    console.log('gjg');
    Share.share({
      message: `Product Name :  \nProduct Price :  \n Product Description : `,
    });
  };
  const manage = () => {
    setLow(true);
    setHig(false);
  };
  const manage1 = () => {
    setLow(false);
    setHig(true);
  };

  const win = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <View
            style={[styles.card1, {backgroundColor: '#fff', marginLeft: -13}]}>
            <Image
              style={styles.img}
              source={require('../../../Assets/icon/filter_icon.png')}
            />
            <Text style={[styles.textcard, {}]}>SORT BY PRICE</Text>
          </View>
          <View style={styles.card1}>
            <TouchableOpacity
              onPress={() => manage()}
              style={[
                styles.touch,
                {backgroundColor: low ? 'white' : '#2fbb9c'},
              ]}>
              <Text style={[styles.text, {color: low ? '#2fbb9c' : 'white'}]}>
                LOW
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => manage1()}
              style={[
                styles.touch,
                {backgroundColor: high ? 'white' : '#2fbb9c'},
              ]}>
              <Text style={[styles.text, {color: high ? '#2fbb9c' : 'white'}]}>
                HIGH
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item, index}) => (
              <View
                style={styles.cardview}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('productdetail')}
                  style={styles.imageicon}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                    source={require('../../../Assets/images/necklace_product.png')}
                  />
                </TouchableOpacity>
                <View style={styles.fotter}>
                  <View style={styles.fottercard}>
                    <Text style={styles.price}>PRICE ON REQUEST</Text>
                  </View>
                  <View style={styles.fotterView}>
                    <TouchableOpacity
                      style={styles.circles}
                      onPress={() => {
                        console.log('liked i ii i ', liked);
                        if (liked.includes(index)) {
                          let unlike = liked.filter(elem => elem !== index);
                          setLiked(unlike);
                        } else {
                          setLiked([...liked, index]);
                        }
                      }}>
                      <Icon
                        name="heart"
                        size={25}
                        color={liked.includes(index) ? 'grey':'#ed6660' }
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => share1()}
                      style={styles.circles}>
                      <Icon name="share-google" size={25} color={'#ed6660'} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
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
