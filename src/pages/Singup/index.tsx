import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CadastroScreen = () => {
  const navigation = useNavigation();
  const [_nome, setNome] = useState('');
  const [_email, setEmail] = useState('');
  const [_senha, setSenha] = useState('');
  const [_confirmaEmail, setConfirmaEmail] = useState('');
  const [_confirmaSenha, setConfirmaSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('./img/MariadaPenha.png')} style={styles.logo} />

      <Text style={styles.texto}>Criar Nova Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome:"
        onChangeText={text => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email:"
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha:"
        secureTextEntry={true}
        onChangeText={text => setSenha(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme seu Email:"
        onChangeText={text => setConfirmaEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha:"
        secureTextEntry={true}
        onChangeText={text => setConfirmaSenha(text)}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
    color: '#300022',
  },
  input: {
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
    width: '75%',
    height: 40,
  },
  botao: {
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
    width: '75%',
  },

  textoBotao: {
    color: '#ffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CadastroScreen;
