import React, { Component } from 'react'
import { View, Text,TextInput } from 'react-native';

const textInput = ({placeholder ,secureTextEntry,numberOfLines,multiline, input:{onChange, ...restInput},type,meta: { touched, error, warning }}) => {

    return(
        <View>
            <View style = {{borderWidth:2}}>
            <TextInput placeholder={placeholder} onChangeText={onChange}{...restInput}
                       type={type} underlineColorAndroid='transparent'
                       secureTextEntry={secureTextEntry}
                       multiline={multiline}
                       numberOfLines ={numberOfLines}
            />
            </View>
            <View>
            {touched && ((error && <Text style={{color:'red',fontSize:12}}>{error}</Text>)
                || (warning && <Text style={{color:'yellow',fontSize:12}}>{warning}</Text>))}
            </View>
        </View>
    )
};

export default textInput;
