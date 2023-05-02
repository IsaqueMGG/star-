import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.star}>
        <Text style={styles.star}>STAR+</Text>
      </TouchableOpacity>
      <View style={styles.use}>
        <Text style={styles.use}>Digite a senha</Text>
      </View>
      <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Senha" />
      </View>
      </View>
      <TouchableOpacity style={styles.orangeButton}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
          <TouchableOpacity style={styles.star}>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  star:{
    marginBottom: "30px",
    fontWeight: "bolder",
    fontSize: "60px",
    color: "#fff"
  },
  link:{
    color: "#fff"
  },
  use:{
    color: '#fff',
    fontSize:'20px',
    marginBottom: 5,
    marginLeft: -100
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
    paddingHorizontal: 109,
    marginBottom: 10,
    paddingVertical: 8,
  },
  searchInput: {
    padding: 0,
    marginLeft: 50,
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e0f24',
    marginTop: 50,
    alignItems: 'center',
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
