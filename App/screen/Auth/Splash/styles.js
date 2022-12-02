import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPink,
    //backgroundColor:'#56bab5'
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 103,
    width: 105,
  },
  title: {
    fontStyle: 'italic',
    fontSize: 25,
    color: colors.white,
  },
});
