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
  card: {
    marginTop: 0,
    paddingHorizontal: 0,
  },
  cardview: {
    backgroundColor: '#faebd7',

    // borderRadius: 10,
    // elevation: 3
  },
  circleview: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 17,
  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 25,marginTop:-10
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
  },
  textview: {
    alignSelf: 'center',
    width: '50%',
  },
});
