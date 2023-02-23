import { StyleSheet, TextInput, View, Button } from 'react-native';
import React from 'react';


export default function App() {
  const [peso, setPeso] = React.useState(0)
  const [altura, setAltura] = React.useState(0)



  const calcula = _ =>{
    const  imc  = peso / (altura*altura);
    if (imc < 18.5){
      alert('Abaixo do peso');
    }
    else if(imc >= 18.5 || imc < 25){
      alert('Peso normal');
    }
    else if(imc >= 25 || imc < 30){
      alert('Acima do peso');
    }
    else if(imc > 30){
      alert('Obesidade');
    }
    
  }
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType= 'numeric'
          placeholder= 'Peso'
          placeholderTextColor= 'gray' 
          style={styles.textInput}
          onChangeText={peso=>setPeso(peso)}

        />
        <TextInput
          keyboardType= 'numeric'
          placeholder= 'Altura'
          placeholderTextColor= 'gray' 
          style={styles.textInput}
          onChangeText={altura=>setAltura(altura)}

        />
        <Button 
        color='#6298'
        onPress={calcula}
        title={"Calcular"} 
        />
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5
  },
});

