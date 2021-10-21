import React, { useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components';
import AddInput from './Components/AddInput';
import TodoList from "./Components/TodoList"; 

/* const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });  */

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData ((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  }; 

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  }; 

  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content"
          backgroundColor="rgba(249,242,234,255)"/>
      </View>

      <View>
      <FlatList
        data = {data}
        keyExtractor={(item) => item.key}
        renderItem = {({ item }) => (
          <TodoList item={item} deleteItem={deleteItem}/>
        )}
        />

        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: rgba(249,242,234,255);
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; 
