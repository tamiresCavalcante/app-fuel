import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default props=>{
    return(
        <View style={estilos.bloco}>
            <TouchableHighlight
                style={estilos.btn}
                onPress={props.aoPressionar}
            >
                <Text style={estilos.txtBtn}>Calcular</Text>
            </TouchableHighlight>
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
        fontSize: 20,
    },
    btn:{
        backgroundColor:'#FF69B4',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        padding:20
    },
    txtBtn:{
        textTransform:'uppercase',
        color:'#fff',
        fontSize: 20,
    }
});