import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    marginBottom: 0,
  },
  main: {
    // flex:1
    // height: hp('27%'),
    // width: wp('129%'),
    // // backgroundColor: '#fddac0',
    //  borderBottomEndRadius: hp("50%"),
    //  borderBottomStartRadius: hp('50%'),borderWidth:0,
     height:'94%',
      width:'100%',
    // alignSelf:'center'
    // minHeight:200,
    //  alignItems: 'center',
    //  alignSelf: 'center',
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //  backgroundColor: '#fddac0',
    paddingHorizontal: 13,marginTop:28,
  },
  circles: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider1: {
    marginTop: 10,
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderWidth: 5,
  },
  cardview: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    borderRadius: 10,
    height: hp('17%'),
    width: wp('46%'),

    backgroundColor: '#fff',
  },
  list: {
    width: wp('100%'),
    height: hp('25%'),
    paddingHorizontal: wp('2%'),
  },
  card2: {
    height: hp('25%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    color: '#fff',
    marginLeft: 2,
    marginTop: 12,
    fontSize: 15,
    fontWeight: '600',
  },
  card1: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {height: 2, width: 0},
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    width: '100%',
    paddingHorizontal: 0,
  },
  button: {
    backgroundColor: colors.btcolor,
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomv: {marginTop: 10, alignItems: 'center'},
  text1: {
   
    color: '#052a47',
    fontFamily: 'Acephimere',
    marginLeft: 15,
  },
  cv: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  textbt: {
    fontSize: 10,
    color: colors.blue,textAlign:'center',
    marginTop:10
  },
  btext: {
    color: '#fff',
    fontSize: 12,
  },
});
