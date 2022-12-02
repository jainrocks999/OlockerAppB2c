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
  circle: {
    height: 100,
    width: 100,
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 60,
    borderWidth: 0.5,
    zIndex: 1,
    marginTop: -50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle1: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    borderWidth: 0.5,
  },
  card: {
    // shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 2, width: 0},
    elevation: 2,
    borderRadius: 13,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 10,
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Acephimere',
    //  marginTop:10
  },
  title1: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Acephimere',
  },
  main: {
    paddingHorizontal: 5,
    marginTop: 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
    width: '85%',
    alignSelf: 'flex-end',
  },
  text: {
    color: colors.white,
    fontFamily: 'Acephimere',
  },
  card1: {
    borderRadius: 10,
    backgroundColor: 'white',

    marginTop: -5,
  },
  main1: {
    marginTop: 60,
    alignItems: 'center',
  },
  rec: {
    borderBottomWidth: 40,
    height: 40,
    borderBottomColor: 'pink',
    borderLeftWidth: 0,
    borderLeftColor: 'red',
    borderRightWidth: 20,
    borderRightColor: colors.blue,
    borderStyle: 'solid',
    marginTop: 15,
  },
  view3: {
    //  backgroundColor:"pink",
    width: '100%',
    height: 50,
    marginTop: 5,
    justifyContent: 'center',
  },
  view: {height: '70%', width: '80%'},
  textV: {
    color: colors.blue,
    fontWeight: '700',
    marginLeft: 8,
    fontFamily: 'Acephimere',
    padding: 3,
  },
  bottomv: {
    // backgroundColor: '#fff',
    //  width: '100%',
    // borderRadius: 15,borderWidth:4
  },
  bottomv2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingHorizontal: 10,
  },
});
