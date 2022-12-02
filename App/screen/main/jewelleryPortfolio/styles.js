import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#fddac0',
    backgroundColor: '#fdd8bf',
  },
  main: {
    height: hp('33%'),
    width: wp('100%'),
    // backgroundColor:colors.blue,
    //  borderBottomEndRadius:hp('3%'),
    //   borderBottomStartRadius:hp('3%'),
  },
  cardview: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    height: hp('18%'),
    width: wp('95%'),
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 0,
  },
  list: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  card2: {
    marginTop: -hp('33.5%'),
  },

  text: {
    color: colors.blue,
    fontWeight: '700',
    fontFamily: 'Acephimere',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'rgba(237,102,96,255)',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    // justifyContent: 'space-between',
    // marginTop: 10,
    width: '100%',
    paddingVertical: 11,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: -hp('5%'),
    paddingHorizontal: 30,
  },
});
