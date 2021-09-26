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
            <Image
                source={require('../assets/bomba.png')}
                style={estilos.bomba}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    bloco:{
        marginBottom: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    bomba:{
        resizeMode: 'stretch',
    }
});