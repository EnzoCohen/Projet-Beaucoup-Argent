import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useTech } from "../../../../hooks/useTech";

export default function TechScreen() {
  const { tech, isLoading, error } = useTech();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#00ffcc" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tech}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{`${item.nom} ${item.prenom}`}</Text>
              <Text style={styles.skill}>{item.competence}</Text>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="eye" size={20} color="white" />
                <Text style={styles.buttonText}>Afficher</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.statusWrapper}>
              <Ionicons
                name={item.avaible ? "checkmark-circle" : "close-circle"}
                size={24}
                color={item.avaible ? "green" : "red"}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
    marginTop: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  skill: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00ffcc",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
  statusWrapper: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
