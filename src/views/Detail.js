import { SafeAreaView,Image,View, Text,StyleSheet,ScrollView,Dimensions, Platform, PixelRatio} from 'react-native'
import COLORS from '../consts/colors'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {SecondaryButton} from "../components/Button"
export default function Detail({navigation,route}) {
  const item = route.params;
  let height= Dimensions.get('window').height
  return (
    <SafeAreaView style={style.mainds}>
      <View style={style.dstn}>
<Icon  name="arrow-back-ios" size={28} color={COLORS.primary}  onPress={() => navigation.goBack()} ></Icon>
  <Text style={{fontSize: 20, fontWeight: 'bold',color:COLORS.primary}} >Details</Text>
</View>
 <ScrollView showsVerticalScrollIndicator={false}>
   <View style={{flex:1,flexDirection:"column",minHeight:height,position:"relative"}}>
   <View style={style.slpi}>
   <Image source={item.image} style={style.pi}></Image>
   </View>
   <View style={style.slpdetails}>
   <View style={style.dstf}>
   <Text style={style.dstit}>{item.name}</Text>
   <Icon name="favorite-border" color={COLORS.white} size={25}  />
   </View>
   <Text style={style.detailstext}>
   Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
   </Text>
   <SecondaryButton title="Add to Cart"></SecondaryButton>
   </View>
   </View>
 </ScrollView>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
  mainds:{
    backgroundColor:COLORS.white,
    flex:1
  },
  dstn:{
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:20,
    paddingVertical:20,
    marginTop:"5%"
  },
slpi:{
  width:"100%",
  minHeight:"50%",
  overflow:"hidden",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"center",
  padding:20,
},
pi:{
  width:240,
  height:240,
},
slpdetails:{
  width:"100%",
  minHeight:"50%",
  backgroundColor:COLORS.primary,
  borderTopRightRadius:30,
  borderTopLeftRadius:30,
  padding:20
}  ,
detailstext:{
  color:COLORS.white,
  marginTop:20,
  marginBottom:40,
  textAlign:"left"
},
dstf:{
  overflow:"hidden",
  flexDirection:"row",
  justifyContent:"space-between",
  paddingRight:20
},
dstit:{
  fontSize:20,
  fontWeight:"bold",
  color:COLORS.white
}

})

