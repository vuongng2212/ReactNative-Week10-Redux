// src/screens/TodoScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodosRequest,
  addTodoRequest,
  deleteTodoRequest,
} from '../redux/actions/todoActions';
import backIcon from '../assets/backIcon.png';
import searchIcon from '../assets/searchIcon.png';
import check from '../assets/Check.png';
import edit from '../assets/Edit.png';
import deleteIcon from '../assets/delete.png';

export default function TodoScreen({ route, navigation }) {
  const { userName } = route.params;
  const dispatch = useDispatch();
  const { todos, error } = useSelector((state) => state.todo);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoRequest(id));
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backIcon} />
          </TouchableOpacity>
          <View style={styles.textHeaderView}>
            <Text style={styles.text}>Hi, {userName}!</Text>
            <Text style={styles.text}>Have agrate day a head</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Image
            source={searchIcon}
            style={{ width: 20, height: 20, margin: 10 }}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#A4A4A4"
            style={{ margin: 10, fontSize: 16 }}
          />
        </View>

        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.itemBox}>
              <Image source={check} />
              <Text style={{ fontSize: 15 }}>{item.title}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginRight: 10}}>
                  <Image source={edit} style={{ marginTop: 5, width: 20, height: 20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleDeleteTodo(item.id)}>
                  <Image
                    source={deleteIcon}
                    style={{ marginTop: 5, width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={styles.addBtn}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Add', { userName: userName });
            }}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'space-between',
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
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
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
  addBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  itemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
