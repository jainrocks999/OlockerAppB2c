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
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  main1: {
    paddingVertical: 10,
    backgroundColor: colors.btcolor,
  },

  card: {
    // shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 2, width: 0},
    elevation: 2,
    // borderRadius: 10,
    //backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    //marginTop: 10,
    //borderWidth: 1,
  },
  textinput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
  },
  input1: {
    marginTop: 5,
    fontSize: 15,
    // paddingVertical: 5,
    color: '#474747',
    width: '80%',
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.lightGrey,
    width: '100%',
    marginTop: 23,
    alignItems: 'center',
    //   paddingHorizontal:20,
    fontFamily: 'Acephimere',
  },

  buttonView: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.btcolor,
    // alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    paddingVertical: 17,
  },
  buttonV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  view1: {
    flexDirection: 'row',
    marginTop: 20,
    //  borderBottomWidth:1,
  },
  text1: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 12,
    fontFamily: 'Acephimere',
    // textDecorationLine:'underline',
    alignSelf: 'center',
  },
  text2: {
    color: '#9a9a9a',
    marginLeft: 20,
    fontSize: 12,
    fontFamily: 'Acephimere',
    alignSelf: 'center',
    // textDecorationLine:'underline',
  },
  imgbcg: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  bottom: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  tt2: {color: '#fff', marginLeft: 25, fontFamily: 'Acephimere'},
});
