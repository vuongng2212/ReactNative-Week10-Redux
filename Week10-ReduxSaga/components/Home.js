import React, { useState } from 'react';  
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from "../assets/Image95.png";
import mailIcon from "../assets/Frame.png";



export default function Home({ navigation }) {
  const [name, setName] = useState(''); 
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 200, height: 200, marginBottom: 50 }} />
      <Text style={styles.textTitle}>MANAGE YOUR TASK</Text>
      <View style={styles.inputContainer}>
        <Image source={mailIcon} style={{ width: 10, height: 10, margin: 5 }} />
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#A4A4A4"
          value={name} 
          onChangeText={text => setName(text)}  // Cập nhật state khi người dùng nhập
        />
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('List', { userName: name })}
      >
        <Text style={styles.buttonText}>GET STARTED -></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitle: {
    color: '#8353E2',
    fontSize: 25,
    fontWeight: 'Bold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 50,
    marginBottom: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#00D1D1',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});