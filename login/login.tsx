import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome5 } from '@expo/vector-icons';
import en from '../src/Idiomas/en';
import es from '../src/Idiomas/es';

const Login = () => {
  const [language, setLanguage] = useState('en');
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const translations = language === 'en' ? en : es;

  return (
    <View style={styles.container}>
      <Image source={require('../assets/imgs/logo.png')} style={styles.logo} />
      <Text style={styles.companyName}>Whastavo</Text>

      <Text style={styles.label}>{translations.varlblUsuario}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={translations.vartxtUsuario}
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>{translations.varlblClave}</Text>
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.inputPassword} 
          placeholder={translations.vartxtClave}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
          <FontAwesome5 name={showPassword ? 'eye-slash' : 'eye'} size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonLogin]}>
          <Text style={styles.buttonText}>{translations.varbtnIngresar}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonExit]}>
          <Text style={styles.buttonText}>{translations.varbtnSalir}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>{translations.varlblMensajeOlvidaste}</Text>
      </TouchableOpacity>

      <View style={styles.languageContainer}>
        <Text style={styles.changeLanguage}>{translations.varlblCambiarIdioma}</Text>
        <Picker
          selectedValue={language}
          style={styles.picker}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Español" value="es" />
        </Picker>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  companyName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    height: 44,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  inputPassword: {
    flex: 1,
    height: 44,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  icon: {
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonLogin: {
    backgroundColor: '#007bff',
  },
  buttonExit: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 20,
  },
  languageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  changeLanguage: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  picker: {
    width: 200,
    height: 44,
  },
});
