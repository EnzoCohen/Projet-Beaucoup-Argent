import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from "react";
import Navbar from "./components/Home/Navbar";
import { useTech } from './hooks/useTech';

export default function App() {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('')
  const Login = () => {
    Alert.alert('Form Submitted', `Name: ${login}, Email: ${password}`);
    console.log(login);
    console.log(password);
  };
  const {tech,isLoading,error} = useTech();

  console.log(tech);
  return (

    <>
      <Navbar></Navbar><View style={styles.container}>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 15,
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  Button: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
});
