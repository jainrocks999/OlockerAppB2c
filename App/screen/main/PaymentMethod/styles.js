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
  card: {
    paddingVertical: 7,
    marginTop: 0,
    backgroundColor: colors.white,
    borderRadius: 13,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  small: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  title: {
    color: colors.btcolor,
    // marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  main: {
    paddingHorizontal: 0,
    marginTop: 10,
  },
  text2: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
  },
  line: {
    borderWidth: 0.7,
    marginTop: 7,
    borderColor: '#cc695d',
    //  borderColor:'#fddac0'
  },
  line1: {
    borderWidth: 0.2,
    marginTop: 5,
    marginBottom: 5,
    borderColor: colors.lightGrey,
    width: '88%',
    marginLeft: 40,
  },
  button: {
    paddingVertical: 15,
    width: '100%',
    backgroundColor: colors.btcolor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonV: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    // paddingHorizontal:5
  },
});
