import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constant/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fddac0',
    marginBottom: 0,
  },
  main: {
    paddingHorizontal: 30,
    marginTop: 0,
  },
  scroll: {
    paddingHorizontal: 10,
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  line1: {
    width: '23%',
    height: 2,
    backgroundColor: colors.btcolor,
  },
  round: {
    width: 56,
    borderWidth: 2,
    height: 56,
    borderRadius: 28,
    borderColor: colors.btcolor,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: colors.btcolor,
    fontFamily: 'Acephimere',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5,
  },
  view2: {
    flexDirection: 'row',
    //  alignItems:'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: -22,
  },
  text1: {
    color: colors.btcolor,
    fontSize: 11,
    fontFamily: 'Acephimere',
    alignSelf: 'center',
  },
  main1: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 20,
  },
  title: {
    alignItems: 'center',
  },
  text2: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Acephimere',color:'#435f75'
  },
  text3: {
    color: colors.lightGrey,
    fontSize: 11,
    fontFamily: 'Acephimere',
  },
  main4: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 0,
    height: 45,
    backgroundColor: '#e3e3e3',
    // backgroundColor: '#c6c3c4',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  card2: {
    marginTop: 10,
    paddingHorizontal: 0,
  },
  loanv: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  loanview: {
    width: '60%',
    borderWidth: 0.2,
    height: 38,
    flexDirection: 'row',
    paddingHorizontal: 10,
    // paddingVertical:5,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  slider: {
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
    width: '50%',
    backgroundColor: '#c6c3c4',
    paddingVertical: 10,
    borderRadius: 5,
  },
  check1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  tt: {
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Acephimere',
  },
  button: {
    backgroundColor: 'rgba(237,102,96,255)',
    alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 15,
    width: '100%',
    paddingVertical: 10,
  },
});
