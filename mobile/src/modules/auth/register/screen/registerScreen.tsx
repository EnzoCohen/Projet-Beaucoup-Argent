import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Merci de remplir tous les champs.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
  
    // Séparation prénom / nom
    const [prenom, ...nomParts] = fullName.trim().split(" ");
    const nom = nomParts.join(" ");
  
    try {
      const response = await fetch("http://172.20.10.2:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: email,
          password: password,
          nom: nom,
          prenom: prenom,
          technicien: true, 
        }),
      });
  
      const data = await response.json();
  
      console.log("Status:", response.status);
      console.log("Données reçues:", data);
  
      switch (response.status) {
        case 201:
          alert("Inscription réussie !");
          break;
        case 409:
          alert(data.error || "Cet email est déjà utilisé.");
          break;
        default:
          alert(data.error || `Erreur inconnue (status: ${response.status})`);
          break;
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      alert("Impossible de contacter le serveur.");
    }
  };
  
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>

      {/* Nom complet */}
      <Text style={styles.label}>Nom complet</Text>
      <TextInput
        style={styles.input}
        placeholder="Jean Dupont"
        autoCapitalize="words"
        value={fullName}
        onChangeText={setFullName}
      />

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="mail@plannify.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Téléphone */}
      <Text style={styles.label}>Numéro de téléphone</Text>
      <TextInput
        style={styles.input}
        placeholder="+33 6 12 34 56 78"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Mot de passe */}
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez un mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Confirmation du mot de passe */}
      <Text style={styles.label}>Confirmer le mot de passe</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirmez le mot de passe"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Bouton d'inscription */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Ionicons name="person-add" size={20} color="white" />
        <Text style={styles.buttonText}>S'inscrire</Text>
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

      {/* Lien vers la connexion */}
      <TouchableOpacity>
        <Text style={styles.registerText}>Déjà un compte ? Connectez-vous</Text>
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