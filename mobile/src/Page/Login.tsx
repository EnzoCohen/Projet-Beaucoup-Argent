import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Comfortaa_300Light, Comfortaa_700Bold, Comfortaa_600SemiBold, Comfortaa_400Regular, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import { router } from 'expo-router';

export default function Login() {
    let [fontsLoaded] = useFonts({
        Comfortaa_700Bold,
        Comfortaa_300Light,
        Comfortaa_600SemiBold,
        Comfortaa_400Regular,
        Comfortaa_500Medium
    });

    return (
        <Text>Bonjour</Text>
    );
}