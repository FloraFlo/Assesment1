import React, { useState, useEffect } from 'react';
import { View, StatusBar, FlatList, Keyboard } from 'react-native';
import styled from 'styled-components';
import AddInput from './Components/AddInput';
import TodoList from "./Components/TodoList"; 
import Empty from "./Components/Empity";
import Header from './Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function HomePage() {

  const [data, setData] = useState([]);

  const [appInit, setAppInit] = useState(true);

  useEffect(() => {
    if (appInit) {
      getData();
      setAppInit(false);
      console.log("getting data...");
    } else {
      storeData();
      console.log("Storing data....");
    }
    storeData();
  }, [data]);

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

  const storeData = async () => {
    const stringified = JSON.stringify(data);
    try {
      await AsyncStorage.setItem("listData", stringified);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const stringified = await AsyncStorage.getItem("listData");
      setItemArray(stringified !== null ? JSON.parse(stringified) : []);
    } catch (error) {
      console.log(error);
    }
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
        ListHeaderComponent = {() => <Header/>}
        ListEmptyComponent = {() => <Empty/>}
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
