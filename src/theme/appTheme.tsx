import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  bg: {
    flex:1,
    backgroundColor: '#000'
  },
  calculatorContainer:{
    flex:1,
    paddingHorizontal:20,
    justifyContent:'flex-end'
  },
  result:{
    color: 'white',
    fontSize: 60,
    textAlign:'right',
    marginBottom:10
  },
  resultLittle:{
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize:30,
    textAlign:'right'
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:18,
    paddingHorizontal:10
  },
  btn:{
    height:80,
    width:80,
    backgroundColor:'#2D2D2D',
    borderRadius:100,
    justifyContent:'center',
    marginHorizontal:10
  },
  btnText:{
    textAlign:'center',
    padding:10,
    fontSize: 30,
    color:'white',
    fontWeight:'400'
  },
  btnLarge:{
    width: '50%'
  }
  
})

