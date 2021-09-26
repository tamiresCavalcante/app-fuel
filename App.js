import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Gasolina from './componentes/gasolina';
import Etanol from './componentes/etanol';
import Calcular from './componentes/btnCalcular';
import Resultado from './componentes/resultado';
import ImagemResultado from './componentes/imgResultado';

export default function App(){

  const [gasolina, setGasolina]=useState(0)
  const [etanol, setEtanol]=useState(0)
  const [resultado, setResultado]=useState('')

  const calcular=()=>{
    if(!gasolina){
      alert('Infome o preço da Gasolina')
      return
    }
    if(!etanol){
      alert('Infome o preço do Etanol')
      return
    }
    let res 
    let calc=((etanol/gasolina*100)).toFixed(1)
    if(calc > 70){
      res = 'Gasolina'
    }
    else{
      res = 'Etanol'
    }
    alert(`O etanol está custando ${calc}% da Gasolina. Portanto, é melhor abastecer com ${res}`)
    setResultado(res)
  };

  const limpar=()=>{
    setResultado('')
  };

  const setarGasolina=(v)=>{
    limpar()
    setGasolina(v)
  };

  const setarEtanol=(v)=>{
    limpar()
    setEtanol(v)
  }

  return(
    <SafeAreaView style={estilos.principal}>
      <Gasolina aoModificar={setarGasolina}/>
      <Etanol aoModificar={setarEtanol}/>
      <Calcular aoPressionar={calcular}/>
      <Resultado resultado={resultado}/>
      <ImagemResultado comb={resultado.charAt(0)}/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  principal:{
    padding: 20,

  }
});