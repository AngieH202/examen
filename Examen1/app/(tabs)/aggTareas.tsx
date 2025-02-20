import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

const AggTareasScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = () => {
    alert(`Tarea agregada: ${title}`);
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <MaterialIcons name="note-add" size={30} color="#6C63FF" style={styles.headerIcon} />
        <Text style={styles.title}>Diario de Tareas</Text>
      </View>

      {}
      <View style={styles.inputContainer}>
        <Ionicons name="ios-pencil" size={24} color="#B0BEC5" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Título"
          placeholderTextColor="#9E9E9E"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      {}
      <View style={styles.inputContainer}>
        <Ionicons name="ios-text" size={24} color="#B0BEC5" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Descripción"
          placeholderTextColor="#9E9E9E"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {}
      <Button 
        title="Agregar Tarea" 
        onPress={handleAddTask} 
        color="#6C63FF" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6C63FF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#B0BEC5',
    backgroundColor: '#ffffff',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    width: '85%',
    fontSize: 16,
    color: '#333',
  },
  description: {
    height: 120,
    textAlignVertical: 'top',
  },
});

export default AggTareasScreen;
