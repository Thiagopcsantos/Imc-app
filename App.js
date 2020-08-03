import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'


export default function App(){
  const [peso, setPeso]= useState('');
  const [altura, setAltura] = useState ('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      alert('Estas abajo del peso ideal! ' + imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      alert('Peso ideal! ' + imc.toFixed(2));
    }else if( imc >= 24.9 && imc < 34.9){
      alert('acima do peso! ' + imc.toFixed(2));
    }
    
  }


  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculo IMC</Text>

      <TextInput 
        style={styles.input}
        value={peso}
        onChangeText={(peso)=>setPeso(peso)}
        placeholder={"Peso (kg)"}
        keyboardType= "numeric"
      />
       <TextInput 
        style={styles.input}
        value={altura}
        onChangeText={(altura)=>setAltura(altura)}
        placeholder={"Altura en  (cm)"}
        keyboardType= "numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  titulo:{
    textAlign:'center',
    marginTop: 20,
    fontSize:30,
    paddingVertical: 30,
    color: 'blue'
  },
  input:{
    backgroundColor: 'grey',
    borderRadius: 10,
    margin:15,
    padding: 15,
    color: '#fff',
    fontSize: 23
  },
  button:{
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 15,
    padding: 10
  },
  buttonText:{
    color:'#fff',
    fontSize: 25

  }
 

})