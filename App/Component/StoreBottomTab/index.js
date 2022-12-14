import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const BottomTab = () => {
  const navigation = useNavigation();

  const renderHome = () => {
    return (
      <View style={styles.container}>
        <View style={{width: 30, marginLeft: 20}}>
          <Image
            style={{height: 21, width: 21, tintColor: '#fff'}}
            source={require('../../Assets/images/home_icon_new.png')}
          />
        </View>
        <Text style={[styles.text, {marginLeft: 20}]}>{'HOME'}</Text>
      </View>
    );
  };

  const PROFILE = () => {
    return (
      <View style={styles.container}>
        <View style={{width: 30, marginLeft: 20}}>
          <Image
            style={{height: 21, width: 21, tintColor: '#fff', marginLeft: 5}}
            source={require('../../Assets/images/profile_icon_new.png')}
          />
        </View>
        <Text style={[styles.text, {marginLeft: 26}]}>{'PROFILE'}</Text>
      </View>
    );
  };
  const NOFIFICATION = () => {
    return (
      <View style={styles.container}>
        <View style={{width: 30}}>
          <Image
            style={{height: 21, width: 21, tintColor: '#fff'}}
            source={require('../../Assets/images/footer_notification.png')}
          />
        </View>
        <Text style={styles.text}>{'NOTIFICATION'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        {renderHome()}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => {
          navigation.navigate('editprofile');
        }}>
        {PROFILE()}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomTabContainer}
        onPress={() => navigation.navigate('Notification')}>
        {NOFIFICATION()}
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;
