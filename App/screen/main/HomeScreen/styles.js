import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  main1: {
    paddingVertical: 90,
    backgroundColor: '#fa8a86',
  },
  swtich: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  input: {
    borderBottomWidth: 0.2,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    //   paddingHorizontal:20
  },

  buttonView: {paddingHorizontal: 10},

  button: {
    backgroundColor: colors.btcolor,
    alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 0,
    width: '100%',
    paddingVertical: 15,
  },

  cardview4: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 10,
    width: wp('39%'),
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('12%'),
    backgroundColor: '#fff',
    borderWidth: 0.5,
  },
  cardview3: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 3,
    borderRadius: 10,
    width: wp('34%'),
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('16%'),
    backgroundColor: '#fff',
  },

  text: {
    color: colors.btcolor,
    fontSize: 18,
    marginTop: 0,
    fontFamily: 'Acephimere',
  },
  text1: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Acephimere',
    marginTop: 5,
  },
  text2: {
    color: colors.white,
    fontSize: 11,
    //  marginTop:5,
    // textAlign:'center',
    fontFamily: 'Acephimere',
  },
  listv: {
    // backgroundColor:colors.blue,
    paddingVertical: 10,
    // height:'100%',width:'100%'
    //   marginBottom:30,
    //  paddingHorizontal:10
  },
  buttonv1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonv: {
    backgroundColor: colors.btcolor,
    alignItems: 'center',
    borderRadius: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    width: '35%',
    paddingVertical: 13,
    marginBottom: 3,
  },
  cardview: {
    borderRadius: 10,
    width: wp('35%'),
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('25%'),
    backgroundColor: '#fff',
  },
  fotter: {
    // backgroundColor:colors.lightPink,
    // paddingVertical:50
    height: hp('38%'),
    width: wp('100%'),
  },
  logo: {
    height: hp('6.9%'),
    width: wp('55%'),
    paddingHorizontal: hp('1%'),
    paddingVertical: hp('1.5%'),
    marginTop: 10,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  img3: {
    height: '100%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  img4: {
    height: '100%',
    width: '100%',
    //  borderTopRightRadius:10,
    //  borderTopLeftRadius:10
  },
  img2: {
    height: hp('20.5%'),
    width: wp('35%'),
    marginTop: -34,
  },
  cardimg: {
    height: 16,
    width: 16,
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginTop: -9,
    zIndex: 1,
    marginRight: 5,
  },
  cardfotter: {
    height: hp('4.5%'),
    backgroundColor: colors.btcolor,
    width: wp('35%'),
    marginTop: -8,
    borderBottomLeftRadius: hp('1%'),
    borderBottomRightRadius: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 5,
  },
});
