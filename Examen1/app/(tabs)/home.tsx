import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Bienvenido, <Text style={styles.emailText}>{user?.email || "Usuario"}</Text>
      </Text>
      
      <Button title="Cerrar Sesión" onPress={() => { 
        logout(); 
        router.replace('/login'); 
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  welcomeText: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  emailText: { color: "blue" } 
});
