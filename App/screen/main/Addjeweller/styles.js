import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  main3: {
    flex: 1,
  },
  card: {
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 2, width: 0},
    elevation: 2,
    borderRadius: 13,
    backgroundColor: 'white',
    marginTop: hp('10.1%'),
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: wp('88%'),
    alignSelf: 'center',
    height: hp('21.5%'),
  },
  text1: {
    color: '#10243d',
    fontWeight: '700',
    fontFamily: 'Acephimere',
    marginTop: 3,
    marginLeft: 2,
  },
  main: {
    alignItems: 'center',
    paddingHorizontal: 0,
  },

  text: {
    color: colors.white,
    fontFamily: 'Acephimere',
  },
  input: {
    width: '100%',
    height: 45,
    marginRight: 10,
    marginBottom: 0,
  },
  Input1: {
    width: '100%',
    paddingHorizontal: 5,
    fontFamily: 'Acephimere',
  },
  buttonView: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  button: {
    backgroundColor: colors.btcolor,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: -hp('4%'),
    width: wp('70%'),
    paddingVertical: 10,
  },
});
