import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main1: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  main: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: '#e3e3e3',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgbcg: {
    height: 76,
    width: '99%',
    marginRight: 5,
  },
  img: {
    height: '100%',
    width: '100%', 
    marginTop: -7, 
    marginBottom: 5
  },
  view1: {
    alignSelf: 'center',
    width: '9%',
  },
  picker: {
    width: '24%',
    marginLeft: -8,
  },
  icon: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  text: {
    color: colors.black,
    fontWeight: '900',
  },
  button: {
    backgroundColor: 'rgba(237,102,96,255)',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    paddingVertical: 17,
  },
  image: {
    height: 15,
    width: 15,
    marginRight: 35,
  },
});
