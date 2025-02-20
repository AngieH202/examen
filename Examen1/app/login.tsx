import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { login } = useAuth(); 

  const handleLogin = () => {
    if (email.endsWith('@gmail.com')) {
      login(email);
      router.replace('/aggTareas'); 
    } else {
      alert('Por favor, use un correo @gmail.com');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Ingresar" onPress={handleLogin} color="#5C6BC0" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#F3F4F6' 
  },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    marginBottom: 30, 
    color: '#2E3A59' 
  },
  input: { 
    width: '100%', 
    borderWidth: 1, 
    padding: 15, 
    marginBottom: 20, 
    borderRadius: 10, 
    borderColor: '#B0BEC5', 
    backgroundColor: '#ffffff', 
    fontSize: 16, 
    color: '#333'
  },
  button: { 
    backgroundColor: '#5C6BC0', 
    borderRadius: 10, 
    padding: 10 
  }
});
