import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Auth/Splash';
import Introduction from '../screen/Auth/Introduction';
import Login from '../screen/Auth/Login';
import Regi from '../screen/Auth/Register';
import Otp from '../screen/Auth/OtpVerification';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Smart from '../screen/main/SmartDealsDetail';
import Loyalty from '../screen/main/LoyaltyPoint';
import Myfavourite from '../screen/main/Myfavourite';
import MyJewellers from '../screen/main/Myjewllers';
import Addretailer from '../screen/main/Addjeweller';
import AllDeals from '../screen/main/AllDealList';
import DealsDetail from '../screen/main/DealsDetails';
import jewelleryemi from '../screen/main/JewelleryEmi';
import loyalty1 from '../screen/main/loyalty1';
import colors from '../constant/colors';
import Notification1 from '../screen/main/Notification';
import ProductsDetail from '../screen/main/ProductDetail';
import productlist from '../screen/main/ProductList';
import Refer from '../screen/main/Refer';
import About from '../screen/main/Aboutus';
import Feedback from '../screen/main/Feedback';
import Drawer1 from '../navigation/Drawernavigation/index';
import Savingscheme from '../screen/main/Savingscheme';
import Paymentmethod from '../screen/main/PaymentMethod';
import PaymentStatus from '../screen/main/PaymentStatus';
import SavingScheme1 from '../screen/main/SavingScheme1';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerStyle: {
              backgroundColor: '#fa8a86',
            },
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="main"
          component={Drawer1}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerShadowVisible: false,
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerStyle: {
              backgroundColor: colors.btcolor,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginLeft: -10}}>
                <Icon name="ios-chevron-back" size={27} color={'#fff'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Intro"
          component={Introduction}
          options={{
            title: '',
            // headerTintColor: '#fa8a86',
            headerStyle: {
              backgroundColor: '#fa8a86',
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Regi}
          screenOptions={{headerShown: false}}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerStyle: {
              // backgroundColor: '#fff',
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginLeft: -20}}>
                <Icon name="ios-chevron-back" size={27} color={'#ed6660'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="otp"
          component={Otp}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerStyle: {
              backgroundColor: colors.btcolor,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: -10}}
                onPress={() => navigation.goBack()}>
                <Icon name="ios-chevron-back" size={27} color={'#fff'} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Loyalty"
          component={Loyalty}
          options={({navigation}) => ({
            title: '',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleAlign: 'center',
            // headerBackVisible:(false),
            headerTitle: () => (
              <View style={{width: '100%', marginRight: 15}}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: colors.blue,
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Loyalty Points
                </Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="loyalty1"
          component={loyalty1}
          options={({navigation}) => ({
            title: '',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleAlign: 'center',
            // headerBackVisible:(false),
            headerTintColor: colors.lightGrey,

            headerTitle: () => (
              <View style={{width: '100%', marginRight: 15}}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: colors.blue,
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Loyalty Points
                </Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Dealdetail"
          component={DealsDetail}
          options={({navigation}) => ({
            title: '',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitle: () => (
              <View>
                <Text
                  style={{
                    fontWeight: '700',
                    color: colors.blue,
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Deal Details
                </Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Addjeweller"
          component={Addretailer}
          options={({navigation}) => ({
            headerTitle: () => (
              <View style={{width: '100%', marginLeft: -55}}>
                <Text
                  style={{
                    fontSize: 19,
                    color: colors.blue,
                    fontFamily: 'Acephimere',
                    fontWeight: '700',
                    marginLeft:20
                  }}>
                  Add Jeweller
                </Text>
              </View>
            ),
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Fav')}
                style={{marginLeft: 5}}>
                <Icon name="search" size={20} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="myjeweller"
          component={MyJewellers}
          options={({navigation}) => ({
            title: '',

            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerTitleAlign: 'center',
            // headerBackVisible:(false),
            headerTintColor: colors.lightGrey,
            headerTitle: () => (
              <View style={{width: '100%', marginRight: 15}}>
                <Text
                  style={{
                    fontSize: 19,
                    color: colors.blue,
                    fontFamily: 'Acephimere',
                    fontWeight: '700',
                  }}>
                  My Jewellers
                </Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('MyFav')}
                style={{marginLeft: 5}}>
                <Icon name="md-heart-outline" size={20} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="alldeal"
          component={AllDeals}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#979797',
            //  headerBackVisible:(false),
            headerTitle: () => (
              <View style={{width: '100%', marginLeft: -15}}>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Biba
                </Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="MyFav"
          component={Myfavourite}
          options={({navigation}) => ({
            title: '',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#ffffff',
            },
            headerLeft: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" size={20} />
                </TouchableOpacity>
                <Text
                  style={{
                    color: colors.blue,
                    marginLeft: 15,
                    fontFamily: 'Acephimere',
                    fontWeight: '700',
                    fontSize: 19,
                  }}>
                  My Favourites
                </Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="productdetail"
          component={ProductsDetail}
          options={{
            title: '',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#fddac0',
              
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            // headerBackVisible:(false),
            headerTitle: () => (
              <View style={{width: '100%', marginLeft: -20}}>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Bangles
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Smart"
          component={Smart}
          options={{
            title: '',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleAlign: 'center',
            // headerBackVisible:(false),
            headerTitle: () => (
              <View style={{width: '100%', marginLeft: -10}}>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Online Deals
                </Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity style={{marginLeft: 5}}>
                <Icon name="md-heart-outline" size={20} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="emi"
          component={jewelleryemi}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerStyle: {
              backgroundColor: '#fddac0',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTitle: () => (
              <View>
                <Text
                  style={{
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                    color: colors.blue,
                  }}>
                  Jewellery on Emi
                </Text>
              </View>
            ),
            headerLeft: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{marginLeft: -16}}
                  onPress={() => navigation.goBack()}>
                  <Icon name="ios-chevron-back" size={27} color={'#4f4f4f'} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="refer"
          component={Refer}
          options={{
            title: '',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            // headerBackVisible:(false),
            headerTitle: () => (
              <View>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  {'Refer & Earn'}
                </Text>
              </View>
            ),
          }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleAlign: 'center',
            // headerBackVisible:(false),
            headerTitle: () => (
              <View style={{width: '100%', marginRight: 20}}>
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

            headerRight: () => (
              <TouchableOpacity style={{marginLeft: -10}}>
                <Icon2 name="email-outline" size={25} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="feedback"
          component={Feedback}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTitleAlign:'center',
            // headerBackVisible:(false),
            headerTitle: () => (
              <View>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Feedback
                </Text>
              </View>
            ),
           
          })}
        />
        <Stack.Screen
          name="saving"
          component={Savingscheme}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#fddac0',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerShadowVisible: false,

            headerTitle: () => (
              <View>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  My Savings Schemes
                </Text>
              </View>
            ),
            headerLeft: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{marginLeft: -12}}
                  onPress={() => navigation.goBack()}>
                  <Icon name="ios-chevron-back" size={27} color={colors.blue} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="payment"
          component={Paymentmethod}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#fddac0',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTitle: () => (
              <View>
                <Text
                  style={{
                    color: colors.blue,
                    fontWeight: '700',
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Make Payments
                </Text>
              </View>
            ),
            headerLeft: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{marginLeft: -13}}
                  onPress={() => navigation.goBack()}>
                  <Icon name="ios-chevron-back" size={27} color={colors.blue} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="paymentstatus"
          component={PaymentStatus}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#fddac0',
            },
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTitle: () => (
              <View>
                <Text
                  style={{color: colors.blue, fontWeight: '700', fontSize: 19}}>
                  {' '}
                  Payment Status
                </Text>
              </View>
            ),
            headerLeft: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{marginLeft: -13}}
                  onPress={() => navigation.goBack()}>
                  <Icon name="ios-chevron-back" size={27} color={colors.blue} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />

        <Stack.Screen
          name="Notification"
          component={Notification1}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: colors.white,
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            // headerBackVisible:(false),
            headerTitle: () => (
              <View style={{width: '100%', marginRight: 10}}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: colors.blue,
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Notification
                </Text>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="saving12"
          component={SavingScheme1}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerStyle: {
              backgroundColor: '#faebd7',
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerBackVisible: false,
            headerTintColor: colors.blue,
            headerTitle: () => (
              <View style={{}}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: colors.blue,
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Savings Schemes
                </Text>
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginLeft: -10}}>
                <Icon name="ios-chevron-back" size={27} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="ProductList"
          component={productlist}
          options={({navigation}) => ({
            title: '',
            // headerTintColor: '#fa8a86',
            headerTintColor: '#979797',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerShadowVisible: false,
            headerTitle: () => (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: colors.blue,
                    marginLeft: -10,
                    fontFamily: 'Acephimere',
                    fontSize: 19,
                  }}>
                  Chain
                </Text>
              </View>
            ),
            headerRight: () => (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{marginLeft: 0}}>
                  <Icon name="search" size={25} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MyFav')}
                  style={{marginLeft: 8}}>
                  <Icon name="md-heart-outline" size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 10}}>
                  <Icon2 name="email-outline" size={25} />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
