import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    initial();
  }, []);

  const initial = async () => {
    setTimeout(() => navigation.replace('Intro'), 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('../../../Assets/images/olockericon.png')}
        />
        <Text style={styles.title}>Welcome To olocker B2c APP</Text>
      </View>
    </SafeAreaView>
  );
};
export default Splash;
