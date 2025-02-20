import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

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
      <TextInput
        style={styles.input}
        placeholder="Título"
        placeholderTextColor="#9E9E9E"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Descripción"
        placeholderTextColor="#9E9E9E"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Agregar Tarea" onPress={handleAddTask} color="#6C63FF" />
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
  input: {
    width: '100%',
    borderWidth: 1,
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#B0BEC5',
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#333',
  },
  description: {
    height: 120,
    textAlignVertical: 'top',
  },
});

export default AggTareasScreen;

