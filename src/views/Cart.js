import { SafeAreaView,Image,View, Text,StyleSheet,FlatList } from 'react-native'
import COLORS from '../consts/colors'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import foods from "../consts/foods"
import {PrimaryButton} from "../components/Button"
export default function Cart({navigation}) {
const CartCard=({item})=>{
return(
  <View style={style.mncartc}>
    <View style={style.mccch1}>
      <Image source={item.image} style={style.ciim}></Image>
    </View>
    <View style={style.mccch2}>
    <Text style={style.fpn}>{item.name}</Text>
    <Text style={style.fpi}>{item.ingredients}</Text>
    <Text style={style.fpn}>{item.price}$</Text>
    </View>
    <View style={style.mccch3}>
      <Text style={style.cinv}>3</Text>
      <View style={style.indc}>
      <Icon name="remove" size={25} color={COLORS.white} style={style.idbtns} />
      <Icon name="add" size={25} color={COLORS.white} style={style.idbtns}/>
      </View>
    </View>
  </View>
)
}
return (
<SafeAreaView style={style.maincartp}>
<View style={style.chn}>
<Icon  name="arrow-back-ios" size={28} color={COLORS.primary} onPress={() => navigation.goBack()} ></Icon>
  <Text style={{fontSize: 20, fontWeight: 'bold',color:COLORS.primary}} >Cart</Text>
</View>
<FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
/>
<View style={style.chout}>
<View style={style.choutprice}>
  <Text style={style.ttp}>Total bill</Text>
  <Text style={style.ttd}>50$</Text>
</View>
  <PrimaryButton title="Check out"></PrimaryButton>
</View>
</SafeAreaView>
  )
}
const style=StyleSheet.create({
maincartp:{
  backgroundColor:COLORS.white,
  flex:1
},
chn:{
  flexDirection:"row",
  alignItems:"center",
  paddingHorizontal:20,
  paddingVertical:20,
  marginTop:"1%"
},
chout:{
  padding:20,
},
choutprice:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-evenly",
  paddingBottom:20
},
ttp:{
  fontSize:20,
  fontWeight:"bold"
},
ttd:{
  fontSize:20,
  fontWeight:"bold",
},
mncartc:{
  margin:10,
  padding:10,
  backgroundColor:COLORS.white,
  flexDirection:"row",
  overflow:"hidden",
  alignItems:"center",
  borderRadius:10,
  shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24,
},
mccch1:{
  width:"30%",
  overflow:"hidden",
  padding:1
},
ciim:{
  width:"100%",
  height:100,
},
mccch2:{
  width:"40%",
  overflow:"hidden",
  marginHorizontal:5,
  padding:5

},
fpn:{
  fontSize:20,
  fontWeight:"bold",
},
fpi:{
  marginBottom:10
},
mccch3:{
  width:"30%",
overflow:"hidden",
},
cinv:{
  fontSize:20,
  fontWeight:"bold",
  textAlign:"center",
  marginVertical:10

},
indc:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  marginBottom:10
},
idbtns:{
  backgroundColor:COLORS.primary,
  marginHorizontal:5,
  borderRadius:5
}
})