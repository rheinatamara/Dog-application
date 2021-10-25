import React, {useEffect} from 'react'
import { View, Text,Button,ScrollView,TouchableOpacity,StyleSheet,Image } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {dogsByBreedAsync} from '../store/action/index'
import {fetchImagesAsync} from '../store/action/index'
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  } from "@expo-google-fonts/montserrat";
function List({route,navigation}) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });
    const dispatch = useDispatch()
    const {breedDog} = route.params
    const {isLoading,breed,images} = useSelector(state => state)
    useEffect(() => {
        dispatch(dogsByBreedAsync(breedDog))
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchImagesAsync(breedDog))
    }, [dispatch])

    return (
        <View style={{marginTop:100}}>
                <Text style={{
                    color:"#333",
                    fontFamily:"Medium",
                    fontSize:15,
                    paddingHorizontal:20,
                    marginTop: 20,
                    fontFamily: "Montserrat_700Bold",
                    textAlign: 'center'
                }}>{breedDog}'s Sub Breed</Text> 
            
            
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginTop:20, marginBottom: 20}}
               >
                 {
                 (isLoading) ? <Image style={styles.loading} source={require('../img/loading.gif')} /> : (breed.message) ? breed?.message?.map((dog,idx)=> {
                     return (
                        <View key={idx} style={{
                            alignItems:"center",
                            flexDirection:"row",
                            
                        }}>
                            <Text style={{
                                color: '#E2443B',
                                fontSize:15,
                             fontFamily: "Montserrat_700Bold",
                             borderColor: '#E2443B',
                             borderWidth: 2,
                             paddingVertical:5,
                             paddingHorizontal:15,
                             borderRadius:15,
                             marginHorizontal:5,
                             

                         }}>{dog}</Text>
                         </View>
                     )
                 }) : breed?.breedsData?.message?.map((dog,idx)=> {
                     return (
                        <View style={{
                            alignItems:"center",
                            flexDirection:"row",
                            paddingHorizontal:20,
                            
                            
                        }}>
                            <Text style={{
                            color: '#E2443B',
                            fontSize:15,
                             fontFamily: "Montserrat_700Bold",
                             borderColor: '#E2443B',
                             borderWidth: 2,
                             paddingVertical:5,
                             paddingHorizontal:15,
                             borderRadius:15,
                             marginHorizontal:5,
                             
                         }}>{dog}</Text>
                         
                         </View>
                     )
                })
            }
             
             </ScrollView>
         
             <ScrollView>
            {
                (isLoading) ? <Image style={styles.loading} source={require('../img/loading.gif')} /> : (images.message) ? images?.message?.map((dog,idx)=> {
                    return (
                        <View style={{flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',}}>
                            <Image
                            style={styles.image}
                            source={{
                                uri: dog,
                              }}
                        />
                        </View>
                        
                    )
                }) : images?.dogsImages?.message?.map((dog,idx)=> {
                    return (
                        <View style={{flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',}}>
                            <Image
                            style={styles.image}
                            source={{
                                uri: dog,
                              }}
                        />
                        </View>


                    )
                })
            }
        </ScrollView> 
        </View>
    )
}

export default List
const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
  
        marginLeft: 20,
        marginBottom: 20,
        
        aspectRatio: 1
        
    
    },
    
  });
  