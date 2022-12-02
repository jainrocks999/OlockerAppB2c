import {Platform, StyleSheet} from 'react-native';
import colors from '../../../constant/colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.blue},
  main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
  },
  card: {
    paddingHorizontal: 15,
  },
  cardview: {
    height: 180,
    backgroundColor: '#fff',

    marginTop: 20,
    borderRadius: 8,
    elevation: 5,
    width: '47.5%',
  },
});
