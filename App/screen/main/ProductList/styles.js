import {Platform, StyleSheet} from 'react-native';
import colors from '../../../constant/colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.blue},
  main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    // marginTop: 20,
    backgroundColor: colors.white,
  },
  card1: {
    flexDirection: 'row',
    backgroundColor: '#2fbb9c',
    height: 35,
    width: '40%',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 3,
  },
  textcard: {
    marginLeft: 10,
    color: '#000',
    fontSize: 13,fontFamily:'Acephimere'
  },
  img: {
    height: 18,
    width: 18,
    marginTop: 5,
    tintColor: colors.blue,
  },
  touch: {
    height: 30,
    width: '50%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.white,
  },
  card: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  cardview: {
    height: 200,

    backgroundColor: '#fff',

    margin: 5,
    borderRadius: 10,
    elevation: 5,
    width: '48%',
  },

  imageicon: {
    height: 150,
    width: '100%',
  },
  fotter: {
    height: 50,
    elevation: 5,
    width: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 5,
  },
  fottercard: {
    height: 20,
    width: '100%',
    backgroundColor: colors.btcolor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginTop: 5,
  },
  price: {
    fontSize: 12,
    color: colors.white,
  },

  fotterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3,
  },
});
