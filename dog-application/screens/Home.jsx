import React, {useEffect,useState} from 'react'
import { View, Text,Button,Image } from 'react-native';
import {fetchDogsAsync} from '../store/action/index'
import {useDispatch, useSelector} from 'react-redux'
import DogsList from './DogsList';

import {ScrollView,TextInput} from 'react-native-gesture-handler'
function Home({navigation}) {
    const [value, setValue] = useState('')
    function searchValue(text){
        setValue(text)
    }
    return (

        <View>
             <View style={{
                       flexDirection:"row",
                       alignItems:"center",
                       backgroundColor:"#FFF",
                       padding:10,
                       borderRadius:12,
                       marginHorizontal:50,
                       marginTop:100,
                       marginBottom: 15
                       
                   }}>
                       <TextInput
                            placeholder="Search for a dog!"
                            placeholderTextColor="#345c74"
                            style={{
                                fontFamily:"Bold",
                                fontSize:12,
                                width:280,
                                paddingHorizontal:12
                            }}
                            value={value}
                            onChangeText={(text)=> searchValue(text)}
                       />
                       <Image
                            source={require('../img/sear.png')}
                            style={{height:14,width:14}}
                       />
                   </View>
            <DogsList navigation={navigation} value={value}/>
           
        </View>
        
    )
}

export default Home
