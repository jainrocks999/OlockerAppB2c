import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  drawerContent: {
    marginTop: -4,
    height: '100%',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    // width:'80%',
    color: '#fff',
  },
  caption: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  drawers: {
    // flex:1,
    // borderBottomWidth: 0.4,
    borderBottomColor: '#b6b8b6',
    flexDirection: 'row',
    alignItems: 'center',
    //  paddingHorizontal: 5,

    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    height: 120,

    // backgroundColor:'#ed6660',
  },
  drawer: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#b6b8b6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconView: {
    width: 20,
    height: 20,
    // backgroundColor: 'grey'
  },
  text: {
    marginLeft: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  profile: {
    marginTop: -15,
    // justifyContent: 'center',
  },
  bottom: {
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#53b175',
  },
  stop: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  text1: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Krdev016',
  },
  image: {
    height: 30,
    width: 30,
  },
  imageicon: {
    width: '100%',
    height: '100%',
    //tintColor: 'white',
  },
});
