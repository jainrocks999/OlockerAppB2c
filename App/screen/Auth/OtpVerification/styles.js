import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  main: {
    paddingHorizontal: 50,
  },
  imgbcg: {
    height: 230,
    width: 300,
    alignSelf: 'center',
    marginBottom: 15,
  },
  img: {height: '100%', width: '100%'},
  main1: {
    paddingVertical: 10,
    backgroundColor: colors.btcolor,
  },
  title: {
    // color: '#979797',
    marginRight: 0,
    fontFamily: 'Acephimere',
  },

  textinput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    marginTop: 10,
  },
  input1: {
    fontSize: 18,
    // paddingVertical: 5,
    color: '#474747',
    width: '80%',
    fontWeight: '700',
    fontFamily: 'Acephimere',
    textAlign: 'center',
  },
  input: {
    borderBottomColor: '#979797',
    borderBottomWidth: 0.2,
    width: '100%',
    alignItems: 'center',
  },

  buttonView: {paddingHorizontal: 10, alignItems: 'center'},
  button: {
    backgroundColor: colors.btcolor,
    borderRadius: 5,
    marginTop: 30,
    width: '100%',
    paddingVertical: 17,
  },
  buttonV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
