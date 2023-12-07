// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation} from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('./img/MariadaPenha.png')} 
          style={styles.logo}
        />
        <Text style={styles.headerText}>Para começar, faça seu login.</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail ou CPF"
            placeholderTextColor="#0000004b"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#0000004b"
            secureTextEntry
          />
        </View>
        <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF4F9',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginTop: 30,
  },
  logo: {
    width: 150, 
    height: 220, 
    marginBottom: 40,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#300022',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  input: {
    flex: 1,
    height: 40,
    color: 'white',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#DF2B6A',
    height: 40,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
  },
  loginButtonText: {
    color: '#ffff',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default LoginScreen;