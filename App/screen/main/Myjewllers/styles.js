import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginBottom: 0,
  },
  main: {
    height: hp('63%'),
    width: wp('100%'),
    // backgroundColor: '#fddac0',
    borderBottomEndRadius: hp('55%'),
    borderBottomStartRadius: hp('55%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  ttview: {
    height: '19%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  img1: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  imgcard: {
    height: '80%',
    width: '100%',
    borderRadius: 15,
    borderWidth: 0,
  },
  slider1: {
    marginTop: 10,
    height: hp('22.5%'),
    width: wp('100%'),
  },
  cardview: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 5,
    // elevation: 3,
    borderRadius: 10,
    height: hp('19%'),
    width: wp('47.6%'),
    // alignItems:'center',
    backgroundColor: '#fff',
    // marginBottom:20
  },
  list: {
    width: wp('100%'),
    // height:hp('25%'),
    paddingHorizontal: wp('2%'),
  },
});
