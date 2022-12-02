import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fddac0',
    marginBottom: 0,
  },
  imagecard: {
    height: 260,
    width: wp('100%'),
  },
  main: {
    paddingHorizontal: 10,
    marginTop: -255,
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginBottom: 0,
  },
  view1: {
    height: 50,
    width: '100%',
    borderBottomWidth: 0.2,
    borderBottomColor: colors.lightGrey,
  },
  imgbcg: {
    height: '75%',
    width: '93%',
    alignItems: 'center',
  },
  text: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 3,
    marginLeft: 30,
    fontWeight: '400',
    fontFamily: 'Acephimere',
  },

  input: {
    height: '100%',
    width: '100%',
    marginLeft: 10,
  },
  button: {
    height: 40,
    width: '50%',
    backgroundColor: colors.btcolor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  btext: {color: '#fff', fontSize: 15, fontFamily: 'Acephimere'},
  buttonV: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
