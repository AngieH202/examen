import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      {

      }
      <MaterialIcons name="home" size={50} color="#5C6BC0" style={styles.icon} />
      
      <Text style={styles.welcomeText}>
        Bienvenido, <Text style={styles.emailText}>{user?.email || "Usuario"}</Text>
      </Text>

      {

      }
      <View style={styles.buttonContainer}>
        <Ionicons name="log-out" size={24} color="#5C6BC0" style={styles.buttonIcon} />
        <Button 
          title="Cerrar Sesión" 
          onPress={() => { 
            logout(); 
            router.replace('/login'); 
          }} 
        />
      </View>

      {

      }
      <View style={styles.buttonContainer}>
        <Ionicons name="add-circle" size={24} color="#5C6BC0" style={styles.buttonIcon} />
        <Button 
          title="Regresar a Añadir Tareas" 
          onPress={() => router.push('/aggTareas')}  
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20 
  },
  welcomeText: { 
    fontSize: 20, 
    fontWeight: "bold", 
    marginBottom: 20 
  },
  emailText: { 
    color: "blue" 
  },
  icon: { 
    marginBottom: 20 
  },
  buttonContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20 
  },
  buttonIcon: { 
    marginRight: 10 
  }
});
