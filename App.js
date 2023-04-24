import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.star}>
        <Text style={styles.star}>STAR+</Text>
      </TouchableOpacity>
      <View style={styles.use}>
        <Text style={styles.use}>Use o seu e-mail para entrar</Text>
      </View>
      <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="E-mail" />
      </View>
      </View>
      <TouchableOpacity style={styles.orangeButton}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
          <TouchableOpacity style={styles.star}>
        <Text style={styles.link}>Não tem Star? Assine</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  star:{
    marginBottom: "20px",
    fontWeight: "bolder",
    fontSize: "40px",
    color: "#fff"
  },
    link:{
    color: "#fff"
  },
  use:{
    color: '#fff',
    fontSize:'20px',
    marginBottom:'10px'
  },
  searchContainer: {
    width: '100%',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8f8f8f',
    borderRadius: 10,
    paddingHorizontal: 38,
    paddingVertical: 8,
  },
  searchInput: {
    padding: 0,
    marginLeft: 10,
    fontSize: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e0f24'
  },
  orangeButton: {
    backgroundColor: '#FF4500',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
