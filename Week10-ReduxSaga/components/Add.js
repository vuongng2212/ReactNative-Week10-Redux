import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodoRequest } from '../redux/actions/todoActions';
import backIcon from '../assets/backIcon.png';
import task from '../assets/task.png';

const Screen3 = ({ navigation, route }) => {
  const { userName } = route.params;
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleFinish = () => {
    if (input.trim()) {
      const newTodo = { title: input};
      dispatch(addTodoRequest(newTodo));
      setInput('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backIcon} />
        </TouchableOpacity>
        <View style={styles.textHeaderView}>
          <Text style={styles.text}>Hi, {userName}!</Text>
          <Text style={styles.text}>Have a great day ahead</Text>
        </View>
      </View>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 35,
        }}>
        INPUT YOUR JOB
      </Text>

      <View style={styles.inputContainer}>
        <Image source={task} style={{ width: 20, height: 20, margin: 5 }} />
        <TextInput
          placeholder="Input your job"
          placeholderTextColor="#A4A4A4"
          onChangeText={setInput}
          value={input}
          style={{ flex: 1, marginLeft: 10 }}
        />
      </View>

      <View style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
        <Button title="Finish" onPress={handleFinish} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    margin: 5,
  },
  textHeaderView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default Screen3;
