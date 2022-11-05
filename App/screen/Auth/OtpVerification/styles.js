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
    paddingHorizontal: 50,
    alignItems: 'center',
  },
imgbcg:{
  height:230,
  width:300,
  alignSelf:'center',
  marginBottom:40
},
img:{height:'100%',width:'100%'},
  main1: {
    paddingVertical: 10,
    backgroundColor: colors.btcolor,
  },
  title: {
    // color: '#979797',
    marginRight: 15,
    fontFamily: 'Acephimere',
  },

 
  textinput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
  },
  input1: {
    fontSize: 18,
    // paddingVertical: 5,
    color: '#474747',
    width: '80%',
    fontWeight: '700',
    fontFamily: 'Acephimere',
    textAlign:'center'
  },
  input: {
    borderBottomColor:'#979797',
    borderBottomWidth: 0.2,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',

    //   paddingHorizontal:20
  },

  buttonView: {paddingHorizontal: 10, alignItems: 'center'},
  button: {
    backgroundColor: colors.btcolor,
    // alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
    paddingVertical: 17,
  },
  buttonV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 30,
  },
});
