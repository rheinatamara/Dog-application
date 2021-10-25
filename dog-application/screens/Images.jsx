import React, {useEffect} from 'react'
import { View, Text,StyleSheet,Image,ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {fetchImagesAsync} from '../store/action/index'

function Images() {
    const dispatch = useDispatch()
    
    const {isLoading,images} = useSelector(state => state)
    useEffect(() => {
        dispatch(fetchImagesAsync('australian'))
    }, [dispatch])
    console.log(images);
    return (
        <View>
            {
                (isLoading) ? <Text>Loading...</Text> : (images.message) ? images?.message?.map((dog,idx)=> {
                    return (
                        <Image
                            style={styles.image}
                            source={{
                                uri: dog,
                              }}
                        />
                    )
                }) : images?.dogsImages?.message?.map((dog,idx)=> {
                    return (
                        <Image
                            style={styles.image}
                            source={{
                                uri: dog,
                              }}
                        />

                    )
                })
            }
        </View>
    )
}

export default Images
const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200
    }
  });
  
