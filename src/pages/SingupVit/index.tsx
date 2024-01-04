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
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

interface CustomImagePickerResponse extends ImagePickerResponse {
  error?: string;
  uri?: string;
}

const CadastroScreen = () => {
  const navigation = useNavigation();
  const [imagem, setImagem] = useState<string | null>(null);
  const [_nome, setNome] = useState('');
  const [_rua, setRua] = useState('');
  const [_bairro, setBairro] = useState('');
  const [_complemento, setComplemento] = useState('');
  const [_cpf, setCPF] = useState('');
  const [_telefone, setTelefone] = useState('');

  const escolherImagem = async () => {
    const options = {
      mediaType: 'photo' as const,
      title: 'Selecionar Foto',
      chooseFromLibraryButtonTitle: 'Escolher da Biblioteca',
      maxWidth: 800,
      maxHeight: 800,
      quality: 1 as const,
    };
    try {
      const response: CustomImagePickerResponse = await launchImageLibrary(
        options,
      );
      if (response.didCancel) {
        console.log('Usuário cancelou a escolha da imagem');
      } else if (response.error) {
        console.log('Erro:', response.error);
      } else if (response.uri) {
        // Certifique-se de verificar se 'uri' existe antes de usá-lo
        setImagem(response.uri);
      }
    } catch (error) {
      console.error('Erro ao escolher a imagem:', error);
    }
  };

  return (
    <View style={styles.container}>
      {imagem && <Image source={{uri: imagem}} style={styles.imagem} />}

      <Text style={styles.texto}>Cadastrar Vítima</Text>
      <TouchableOpacity style={styles.botaoFoto} onPress={escolherImagem}>
        <Text style={styles.textoBotaoFoto}>ADICIONAR FOTO</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Nome:"
        onChangeText={text => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Rua:"
        onChangeText={text => setRua(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Bairro:"
        onChangeText={text => setBairro(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Complemento:"
        onChangeText={text => setComplemento(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone:"
        onChangeText={text => setTelefone(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF:"
        onChangeText={text => setCPF(text)}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}>
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
  imagem: {
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
  textoBotao: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    color: '#ffff',
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

  textoBotaoo: {
    color: '#DF2B6A',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    backgroundColor: '#ebbcfd',
  },
  botaoFoto: {
    backgroundColor: '#DF2B6A',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  textoBotaoFoto: {
    color: '#ffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CadastroScreen;
