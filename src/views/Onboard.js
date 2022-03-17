import { View, Text,Image ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../consts/colors'
import { PrimaryButton } from '../components/Button'
export default function Onboard({navigation}) {
// <Image style={styles.obslogo} source={require("../assets/onboard.png")} />
  const onboardfunc=() => navigation.navigate('Home')
  return (
    <SafeAreaView style={styles.sav}>
    <View style={{height:"50%",width:"100%",justifyContent:"center",alignItems:'center',overflow:"hidden"}}>
    <Image style={styles.obslogo} source={require("../assets/onboard.png")} />
    </View>
    <View style={styles.textcontainer}>
    <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <PrimaryButton title="Get Started"  onbfp={onboardfunc}/>
    </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    sav:{
      flex:1,
      backgroundColor:COLORS.white
    },
   obslogo:{
    width:"80%",
    resizeMode:"contain",
    position:'relative',
    right:-40
   } ,
   textcontainer:{
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
   },
   indicatorContainer: {
     height: 50,
     flex: 1,
     justifyContent: 'center',
     flexDirection: 'row',
     alignItems: 'center',
   },
   currentIndicator: {
     height: 12,
     width: 30,
     borderRadius: 10,
     backgroundColor: COLORS.primary,
     marginHorizontal: 5,
   },
   indicator: {
     height: 12,
     width: 12,
     borderRadius: 6,
     backgroundColor: COLORS.grey,
     marginHorizontal: 5,
   },

})