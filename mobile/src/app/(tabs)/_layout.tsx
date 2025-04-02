import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Importer les icônes

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false, // 👈 Désactive le header globalement
          tabBarStyle: {

            backgroundColor: "#1e1e1e", // Couleur de fond des onglets
            borderTopWidth: 0, // Enlever la bordure
            height: 60, // Hauteur de la barre d'onglets
          },
          tabBarActiveTintColor: "#00ffcc", // Couleur de l'onglet actif
          tabBarInactiveTintColor: "#888", // Couleur des onglets inactifs
        }}
      >

        <Tabs.Screen
          name="register"
          options={{
            title: "Register",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add" size={size} color={color} />
            ),
          }}
        />

        {/* Onglet Profil */}
        <Tabs.Screen
          name="login"
          options={{
            title: "login",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      {/* Masquer le header des écrans dans le Stack */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </>
  );
}
