import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.star}>STAR+</Text>
      <Text style={styles.description}>Use o seu e-mail para entrar</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="e-mail" />
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.buttonCont}>
        <Text style={styles.buttonentrar}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1526',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    fontSize: 68,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUp: {
    color: '#fff',
    marginTop: 20,
  },
});

export default App;
