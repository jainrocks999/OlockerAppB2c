import * as React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../Component/DrawerPage';
import HomeScreen from '../../screen/main/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import EditProfile from '../../screen/main/EditProfile';
import colors from '../../constant/colors';
import Supplierprofile from '../../screen/main/supplierProfile';
import jewelleryport from '../../screen/main/jewelleryPortfolio';
import AddNewUser from '../../screen/main/AddNewUser';
import update from '../../screen/main/Updateprofile';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{headerShown: true}}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          title: '',
          // headerTintColor: '#fa8a86',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{marginLeft: 10}}>
                <Icon1 name="menu" size={27} />
              </TouchableOpacity>
              <View style={{width: '50%', marginLeft: 20}}>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Dashboard
                </Text>
              </View>
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Loyalty')}
                style={{marginLeft: 5}}>
                <Icon name="gift" size={18} color={colors.btcolor} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('MyFav')}
                style={{marginLeft: 15}}>
                <Icon1 name="heart" size={20} color={colors.btcolor} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="editprofile"
        component={EditProfile}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerTitle: () => <View></View>,
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{marginLeft: 15}}>
                <Icon1 name="menu" size={27} />
              </TouchableOpacity>
              <View style={{width: '50%', marginLeft: 20}}>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Profile
                </Text>
              </View>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="update"
        component={update}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerTitle: () => <View></View>,
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{marginLeft: 15}}>
                <Icon1 name="menu" size={27} />
              </TouchableOpacity>
              <View style={{width: '50%', marginLeft: 20}}>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Profile
                </Text>
              </View>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="supplier"
        component={Supplierprofile}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerTitle: () => (
            <View style={{marginLeft: -110}}>
              <Text
                style={{
                  color: colors.blue,
                  fontWeight: '700',
                  fontFamily: 'Acephimere',
                  fontSize: 19,
                }}>
                Mangal Jewellers
              </Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{marginLeft: 15}}>
              <Icon1 name="menu" size={27} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 15}}>
              <Image
                style={{height: 15, width: 20}}
                source={require('../../Assets/icon/message_icon_new.png')}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="portfolio"
        component={jewelleryport}
        options={({navigation}) => ({
          title: '',
          // headerTintColor: '#fa8a86',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{marginLeft: 10}}>
                <Icon1 name="menu" size={27} />
              </TouchableOpacity>
              <View style={{width: '100%'}}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: 'Acephimere',
                    color: colors.blue,
                    fontWeight: '700',
                    fontSize: 19,
                  }}>
                  Your Jewellery Portfolio
                </Text>
              </View>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="addnewuser"
        component={AddNewUser}
        options={({navigation}) => ({
          title: '',
          // headerTintColor: '#fa8a86',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.toggleDrawer()}
                style={{marginLeft: 10}}>
                <Icon1 name="menu" size={27} />
              </TouchableOpacity>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: 'Acephimere',
                  color: colors.blue,
                  fontSize: 19,
                  fontWeight: '700',
                }}>
                Add Uninsured Jewellery
              </Text>
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
