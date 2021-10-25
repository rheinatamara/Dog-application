import React , {useEffect,useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Image } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {fetchDogsAsync} from '../store/action/index'
import { useNavigation } from '@react-navigation/native';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from "@expo-google-fonts/montserrat";


const DogsList = ({value}) => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });
      
    const dispatch = useDispatch()
    const {dogs,isLoading} = useSelector(state => state)
    const newData = dogs?.message?.filter((data)=> {
        return data === value.toLowerCase()
    })
    useEffect(() => {
        dispatch(fetchDogsAsync())
    }, [dispatch])
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
            {
                isLoading ? <Image style={styles.loading} source={require('../img/loading.gif')} />
                : (newData.length!== 0) ? (newData.map((dog,idx)=> {
                    return (
<TouchableOpacity key={idx}
                        onPress={() => navigation.navigate('List', {breedDog: dog})}
                style={{
                    flexDirection:"row",
                    backgroundColor: "#E2443B",
                    padding:20,
                    marginHorizontal:50,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >


                    <View>
                         
                         <Text style={{
                             color:"#fff",
                             fontFamily:"Medium",
                             fontSize:15,
                             paddingHorizontal:20,
                             fontFamily: "Montserrat_700Bold",

                         }}>
                             {dog}
                         </Text>
                    </View>

            </TouchableOpacity>

                    )
                })) : (dogs?.message).map((dog,idx)=> {
                    return (
                        <TouchableOpacity key={idx}
                        onPress={() => navigation.navigate('List', {breedDog: dog})}
                style={{
                    flexDirection:"row",
                    backgroundColor: "#E2443B",
                    padding:20,
                    marginHorizontal:50,
                    borderRadius:20,
                    alignItems:"center",
                    marginTop:10
                }}
            >


                    <View>
                         
                         <Text style={{
                             color:"#fff",
                             fontFamily:"Medium",
                             fontSize:15,
                             paddingHorizontal:20,
                             fontFamily: "Montserrat_700Bold",

                         }}>
                             {dog}
                         </Text>
                    </View>

            </TouchableOpacity>
                    )

                })
            }
            </ScrollView>
        
    </View>
    )
}

export default DogsList

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }
})

