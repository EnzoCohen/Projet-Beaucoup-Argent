import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Comfortaa_300Light, Comfortaa_700Bold, Comfortaa_600SemiBold, Comfortaa_400Regular, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";

export default function Navbleue() {
    let [fontsLoaded] = useFonts({
        Comfortaa_700Bold,
        Comfortaa_300Light,
        Comfortaa_600SemiBold,
        Comfortaa_400Regular,
        Comfortaa_500Medium
    });

    if (!fontsLoaded) {
        return null; // or a loading spinner
    }

    return (
        <View style={{ height: 380, backgroundColor: '#18b6a4', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 20, borderBottomEndRadius: 20, paddingBottom: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#ffffff', fontFamily: "Comfortaa_700Bold", marginTop: 50}}>Plannify</Text>
            <Text style={{ fontSize: 25, color: '#ffffff', fontFamily: "Comfortaa_600SemiBold", marginTop: 60 }}>
                Planifiez
            </Text>
            <Text style={{ fontSize: 25, color: '#00ffe1', fontFamily: "Comfortaa_600SemiBold", marginBottom: 40, marginTop: 5, }}>
                comme bon vous semble
            </Text>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffffff',
                    padding: 10,
                    borderRadius: 20,
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 200
                }}
                onPress={() => { /* Add your onPress handler here */ }}
            >
                <Ionicons name="search" size={20} color="#18b6a4" style={{ marginRight: 10 }} />
                <Text style={{ color: '#18b6a4', fontSize: 16, fontFamily: "Comfortaa_700Bold" }}>RECHERCHER</Text>
            </TouchableOpacity>
        </View>
    );
}