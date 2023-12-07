import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Image source={require('./img/MariadaPenha.png')} style={styles.logo} />
      <SearchBar />
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder="Pesquisar Vítimas:" style={styles.input} />
    </View>
  );
};

const HomeScreen = () => {
  const peopleData = [
    { id: 1, name: 'Vítima 1' },
    { id: 2, name: 'Vítima 2' },
    { id: 3, name: 'Vítima 3' },
    { id: 4, name: 'Vítima 4' },
    { id: 5, name: 'Vítima 5' },
    { id: 6, name: 'Vítima 6' },
    { id: 7, name: 'Vítima 7' },
    { id: 8, name: 'Vítima 8' },
    { id: 9, name: 'Vítima 9' },
  ];

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.rowContainer}>
        {peopleData.map(person => (
          <TouchableOpacity key={person.id} style={styles.personContainer}>
            <Text>{person.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  topBar: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 240,
    backgroundColor: '#FFEAF4',
    padding: 8,
    marginBottom: 30,
  },
  logo: {
    marginBottom: 5,
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // Alteração para 'flex-start'
  },
  personContainer: {
    width: '45%', // Ajuste da largura para 45%
    height: '29%',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  searchBar: {
    height: 60,
    justifyContent: 'center',
    padding: 8,
    width: 240,
  },
  input: {
    height: 36,
    backgroundColor: 'white',
    paddingLeft: 8,
    borderRadius: 5,
    borderWidth: 0,
  },
});

export default HomeScreen;
