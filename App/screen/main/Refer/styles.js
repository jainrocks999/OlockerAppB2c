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
    paddingVertical: 5,
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  text: {
    color: colors.btcolor,
    fontSize: 22,
    fontWeight: '500',
    marginTop: -15,
  },
  text1: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '600',
  },
  card: {paddingHorizontal: 5, marginTop: 30},
  cardview: {
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 3,

    backgroundColor: '#fff',
    //    borderWidth:1,
    marginTop: 5,
    borderRadius: 30,
    elevation: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonView: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ed6660',
    alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
    paddingVertical: 13,
  },
  btext: {color: '#fff', fontSize: 13},
});
