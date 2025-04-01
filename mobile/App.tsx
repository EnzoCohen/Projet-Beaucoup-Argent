import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import Navbleue from "./src/components/Navbleue";

export default function App() {
  const [login, setlogin] = useState('');
  const [password, setpassword] = useState('')
  const Login = () => {
    Alert.alert('Form Submitted', `Name: ${login}, Email: ${password}`);
    console.log(login);
    console.log(password);
  };

  return (
      <>
          <Navbleue></Navbleue><View style={styles.container}>
          <Text style={styles.label}>Login:</Text>
          <TextInput value={login} style={styles.input} onChangeText={setlogin} placeholder="Enter your login"/>
          <Text style={styles.label}>Password:</Text>
          <TextInput value={password} style={styles.input} onChangeText={setpassword}
                     placeholder="Enter your password"/>
          <Button title={"Entrer"} onPress={Login}></Button>
          <StatusBar style="auto"/>
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
