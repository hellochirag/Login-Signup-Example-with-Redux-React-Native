import React from 'react';
import { StyleSheet } from 'react-native'

const AllStyles = StyleSheet.create({
    errorText: {
        fontSize: 8,
        color: '#f00'
    },
    warnText: {
        fontSize: 8,
        color: '#00f'
    },
    container: {
        padding: 12,
        backgroundColor: '#fff',
        flex: 1
    },
    header: {
        backgroundColor: '#000000',
    },
    navTitle:{
        color: '#fff'
    },
    buttonStyle :{
        backgroundColor:'gray',
        borderRadius:10,
        borderWidth:3,
        borderColor:'black',
        width :100
    },
    nativeButtonText :{
        fontWeight:'bold',
        fontSize:20
    },
    viewStyleImage :{
        height: 180,
        width: 180,
        borderRadius: 180,
        borderColor: 'gray',
        borderWidth: 3,
        marginBottom : 15,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        height:175,
        width:175,
        borderRadius:180
    }
});

export default AllStyles;
