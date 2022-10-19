// export default{
//   lightpink:'#fa8a86',
//   darkpink:'#ed6660',
//   textcolor:'#c6c3c4',
//   placeholdercolor:'#808080',
// }
import { StyleSheet } from "react-native";
import colors from "../../../constant/colors";
export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  },
  main1:{
    paddingHorizontal:10,
    marginTop:20,
  },
  main:{
    flexDirection:'row',
    marginTop:10,
    paddingVertical:5,
    backgroundColor:"#c6c3c4",
    borderRadius:5,
    paddingHorizontal:10
  },
  view1:{
    alignSelf:'center',
    width:'9%'
  },
  picker:{
    width:'24%',
    marginLeft:-8
  },
  icon:{
    alignSelf:'center',
    alignItems:'center',
    marginTop:18
  },
  text:{
    color:colors.black,
    fontWeight:'700',
  },
  button: {
    backgroundColor:'rgba(237,102,96,255)',
     alignItems: 'center',
    borderRadius: 5,
    // justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
   paddingVertical:17,
  },
  image:{
    height:15,width:15,marginRight:35,
  }
})