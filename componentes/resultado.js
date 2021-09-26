import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default props=>{
    return(
        <View style={estilos.bloco}>
            <Text>Melhor combustível: {props.resultado}</Text>
 
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom: 10,
    },

});