import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import colors from '../../../constant/colors';
import {RadioButton} from 'react-native-paper';

const Loyalty = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('one');
  const [checked, setChecked] = React.useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: 10}}>
        <View style={styles.card}>
          <View style={ {paddingHorizontal: 10}}>
            <Text style={styles.title}>2 Invoices</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.main}>
            
            <View style={[styles.top, {paddingHorizontal:10}]}>
              <View>
              <Text style={{fontSize: 16, color: 'black', }}>
              PROLLN-028976
            </Text>
                <Text style={{}}>Invoice number</Text>
               
                  <Text style={{ fontWeight: '500'}}>
                    Billing Date{' '}
                    <Text style={{fontWeight: '500', color: colors.blue}}>
                    31 July 2021
                  </Text>
                  </Text>
                  
               
              </View>
             
              <Text
                style={{marginLeft: 10, fontWeight: '600', color: colors.blue}}>
                ₹ 250000
              </Text>
              
            </View>
          </View>
          <View style={styles.main}>
            
            <View style={[styles.top, {paddingHorizontal:10}]}>
              <View>
              <Text style={{fontSize: 16, color: 'black', }}>
              PROLLN-028976
            </Text>
                <Text style={{}}>Invoice number</Text>
                  <Text style={{ fontWeight: '500'}}>
                    Billing Date{' '}
                    <Text style={{fontWeight: '500', color: colors.blue}}>
                    31 July 2021
                  </Text>
                  </Text>
               
                
              </View>
            
              <View style={{alignSelf:'flex-end'}}>
                <Text
                  style={{
                   alignSelf:'flex-end',
                    fontWeight: '600',
                    color: colors.blue,
                  }}>
                  ₹ 250000
                </Text>
                <Text
                  style={{
                    color: colors.btcolor,
                    fontSize: 11,
                    fontFamily: 'Acephimere',
                    // marginLeft: -36,
                  }}>
                  Late payment fee ₹ 100
                </Text>
              </View>
             
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.top, {paddingHorizontal: 10}]}>
            <View>
              <Text
                style={{fontSize: 20, fontWeight: '500', color: colors.blue}}>
                Total Payable
              </Text>
              <Text style={{fontWeight: '500', marginTop: 10}}>
                Payment methods
              </Text>
            </View>
            <Text style={styles.title}>₹ 5100</Text>
          </View>
          <View style={[styles.main, {paddingHorizontal: 30}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="first"
                color={colors.blue}
                uncheckedColor="#474747"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Image
                style={{height: '47%', width: '47%', marginLeft: 5}}
                source={require('../../../Assets/images/py_payment.png')}
              />
            </View>
            <View style={styles.line1} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="second"
                color={colors.blue}
                uncheckedColor="#474747"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Image
                style={{height: '47%', width: '47%', marginLeft: 5}}
                source={require('../../../Assets/images/gp_payment.png')}
              />
            </View>
            <View style={styles.line1} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="three"
                color={colors.blue}
                uncheckedColor="#474747"
                status={checked === 'three' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('three')}
              />
              <Image
                style={{height: '45%', width: '45%', marginLeft: 5}}
                source={require('../../../Assets/images/ap_payment.png')}
              />
            </View>
            <View style={styles.line1} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="five"
                color={colors.blue}
                uncheckedColor="#474747"
                status={checked === 'five' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('five')}
              />
              <Image
                style={{height: '45%', width: '45%', marginLeft: 5}}
                source={require('../../../Assets/images/visa_payment.png')}
              />
            </View>
            <View style={styles.line1} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="four"
                color={colors.blue}
                uncheckedColor="#474747"
                status={checked === 'four' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('four')}
              />
              <Image
                style={{height: '35%', width: '35%', marginLeft: 5}}
                source={require('../../../Assets/images/c_d_paymeny.png')}
              />
            </View>
            <View style={styles.line1} />
          </View>
        </View>

        <View style={styles.buttonV}>
          <TouchableOpacity
            onPress={() => navigation.navigate('paymentstatus')}
            style={styles.button}>
            <Text style={{color: '#fff', fontSize: 15, fontStyle: 'italic'}}>
              PAY NOW
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Loyalty;
