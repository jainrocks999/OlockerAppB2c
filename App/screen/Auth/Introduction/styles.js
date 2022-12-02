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
  imgbcg: {
    height: 170,
    width: 340,
    alignSelf: 'center',
  },
  img: {height: '100%', width: '100%'},
  main: {
    marginTop: 20,
    height: 100,
    width: 300,
    alignSelf: 'center',
  },
  main1: {
    paddingVertical: 18,
    backgroundColor: '#fa8a86',
  },

  card: {
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {height: 2, width: 0},
    elevation: 2,

    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  input: {
    borderBottomWidth: 0.2,
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },

  buttonView: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    paddingVertical: 17,
  },
  buttonV: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text1: {
    fontSize: 14,
    marginLeft: 5,
    textAlign: 'center',
    fontFamily: 'Acephimere',
  },
});
