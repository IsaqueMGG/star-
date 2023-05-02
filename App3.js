import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.star}>STAR+</Text>
      <Text style={styles.description}>Mais do que você gosta. O que você vai ver primeiro?</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>ASSINAR AGORA</Text>
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
  description: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 70
  },
  buttonContainer: {
    backgroundColor: '#ff9800',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
