import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

export default props=>{
    return(
        <View style={estilos.bloco}>
  
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom: 10,
    },
    txt:{
        borderColor: '#000',
        borderWidth:2,
        borderRadius: 7,
        fontSize: 20
    }
});