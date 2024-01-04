import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function UserProfileScreen() {
  const navigation = useNavigation();

  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{uri: 'https://pbs.twimg.com/media/Fw3a16sX0AA9-B7.jpg'}}
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>Nome do Usuário</Text>
          <Text style={styles.userEmail}>usuario@email.com</Text>
          <Text style={styles.userNumero}>(84)9-99289222</Text>
          <Text style={styles.userCPF}>123.123.123.12</Text>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.descriptionInput}>
          <Text style={styles.descriptionLabel}>Adicionar Relato:</Text>
          <TextInput
            style={styles.descriptionInputField}
            onChangeText={text => setDescription(text)}
            value={description}
            multiline={true}
          />
        </View>

        <TouchableOpacity
          style={styles.customButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 21,
    backgroundColor: '#FFEAF4',
    marginBottom: 50,
    alignItems: 'center',
  },
  topSection: {
    backgroundColor: '#FFEAF4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, // Ajuste do espaçamento vertical
    paddingHorizontal: 16, // Ajuste do espaçamento horizontal
    height: '25%',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16, // Adicionado um espaçamento interno
    borderTopLeftRadius: 20, // Adicionado bordas arredondadas na parte superior
    borderTopRightRadius: 20,
    width: '100%', // Ocupa toda a largura da tela
    marginTop: -20, // Ajuste do marginTop para subir a bottomSection
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
    marginBottom: 60,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userCPF: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 75,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  userNumero: {
    fontSize: 16,
    color: 'gray',
  },
  descriptionInput: {
    marginVertical: 20,
  },
  descriptionLabel: {
    fontSize: 18,
  },
  descriptionInputField: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    minHeight: 270,
  },
  customButton: {
    backgroundColor: '#DF2B6A',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginTop: 10, // Ajuste do marginTop para dar espaço acima do botão
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
