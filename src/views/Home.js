import { SafeAreaView,Image,View, Text,StyleSheet,ScrollView,Dimensions, FlatList,Platform, PixelRatio,TouchableOpacity} from 'react-native'
import COLORS from '../consts/colors'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import foods from "../consts/foods"
import categories  from '../consts/categories'
let devhei=Dimensions.get("window").height
 let devwid=Dimensions.get("window").width

 export default function Home({navigation}) {
const Cat=()=>{
  return(
    <ScrollView
    contentContainerStyle={{
  flexDirection:'row',
  overflow:"hidden",
  height:devhei/12,
  elevation: 0
  }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {
        categories.map((i,index)=>(
          <TouchableOpacity key={index}>
      <View style={style.hmch2cat} >
        <Image source={i.image} style={style.hmch2img}></Image>
        <Text style={style.hmch2name}>{i.name}</Text>
      </View>
</TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}
const Product=({item})=>{
  return(
    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("DetailScreen",item)}>
    <View style={style.mnprodcards}>
    <View style={{justifyContent:"center",alignItems:"center"}}>
       <Image source={item.image} style={style.proim}></Image>
    </View>
      <View>
        <Text style={{color:COLORS.dark,fontWeight:"bold",fontSize:18}}>{item.name}</Text>
        <Text style={{color:"grey",marginVertical:5}}>{item.ingredients}</Text>
      </View>
      <View style={style.pprincbtn}>
      <Text style={style.ppr}>{item.price}$</Text>
      <View style={style.incbt}>
      <Icon name="add" size={25} color={COLORS.white} />
      </View>
      </View>
    </View>
</TouchableOpacity>
  )
}
  return (
    <SafeAreaView style={style.mnhm}>
      <View style={style.hmch1}>
      <View>
        <Text style={style.hmch1na}>Hello, Mukeet</Text>
        <Text style={style.hmch1wyw}>What you want today</Text>
      </View>
      <View>
        <Image source={require("../assets/person.png") } style={style.dp}></Image>
      </View>  
      </View>
   <Cat></Cat>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Product item={item} />}
      style={{padding:10,}}
      />
        </SafeAreaView>
  )
}
const style=StyleSheet.create({
  mnhm:{
    flex:1,
    overflow:'hidden',
    backgroundColor:COLORS.white
  },
  hmch1:{
  minHeight:devhei/9,
  paddingVertical:30,
  paddingHorizontal:20,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  overflow:"hidden",
    
  },

  hmch1na:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:5
  }
  ,
  hmch1wyw:{
    fontSize:15,
    marginBottom:5,
    color:'grey'
  },
  dp:{
    width:60,
    height:60,
    borderRadius:50
  },
  hmch2cat:{
    height:50,
    overflow:"hidden",
    backgroundColor:COLORS.secondary,
    flexDirection:"row",
    alignItems:"center",
    paddingRight:30,
    paddingLeft:5,
    borderRadius:20,
    paddingVertical:3,
    marginHorizontal:5
  },
  hmch2img:{
    width:40,
    height:40,
    marginRight:5
  },
  hmch2name:{
    color:COLORS.primary,
    fontSize:15,
    fontWeight:"bold"
  },
  mnprodcards:{width:devwid/2.3,backgroundColor:COLORS.white,
  marginVertical:32,
  marginHorizontal:5,
  shadowColor: "#000",
shadowOffset: {
width: 0,
height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 10,
padding:18,
position:"relative",
borderRadius:10,
 },
 proim:{width:100,height:100,position:"relative",bottom:50},
 pprincbtn:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},
 incbt:{ height:25,width:25,justifyContent:"center",alignItems:"center",backgroundColor:COLORS.primary,borderRadius:50,},
 ppr:{color:COLORS.dark,fontWeight:"bold",fontSize:18}  
})