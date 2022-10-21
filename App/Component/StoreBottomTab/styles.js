import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constant/colors';
export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor:colors.btcolor,
    alignItems: 'center',
    justifyContent: 'space-between',
      opacity: 50,
     paddingVertical:5,
     shadowColor:colors.black,
    shadowOpacity:10,
    shadowOffset:{height:4,width:2},
    elevation:3,
   // borderTopWidth:3,
    // borderTopColor:'#afb3b0'
    
  },

  itemSeperator: {
    borderBottomWidth: 0.5,
    borderColor: '#C1C1C1',
    width: '50%',
  },
  bottomTab: {
    tintColor: 'white',
    height: 25,
    width: 25,
  },
  bottomTab1: {
    height: 40,
    width: 40,
  },
  buttonText: {
    fontSize: 11,
    alignSelf: 'center',
    width: 90,
    padding: 4,
    textAlign: 'center',
  },
  text:{
    fontSize: 12,
    color:colors.white,
    marginTop:5,
    fontFamily:'Acephimere',marginRight:7
  },
  container:{
    justifyContent: 'center', 
    alignItems: 'center',
  }
});