import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se connecter</Text>

      {/* Champ Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="mail@plannify.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Champ Mot de Passe */}
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Mot de passe oublié */}
      <TouchableOpacity>
        <Text style={styles.link}>Mot de passe oublié ?</Text>
      </TouchableOpacity>

      {/* Bouton Connexion */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="log-in" size={20} color="white" />
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      {/* Connexion avec Google, Apple, Facebook */}
      <Text style={styles.orText}>Ou</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#4285F4" }]}>
          <Ionicons name="logo-google" size={20} color="white" />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#000" }]}>
          <Ionicons name="logo-apple" size={20} color="white" />
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#1877F2" }]}>
          <Ionicons name="logo-facebook" size={20} color="white" />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Lien vers l'inscription */}
      <TouchableOpacity>
        <Text style={styles.registerText}>Pas encore inscrit ? Créez un compte</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
  link: {
    color: "#007AFF",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  orText: {
    marginVertical: 10,
    fontSize: 14,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  socialText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
  },
  registerText: {
    marginTop: 20,
    color: "#007AFF",
    fontWeight: "bold",
  },
});
