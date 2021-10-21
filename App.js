import React, { useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components';

const getFonts = () =>
  Font.loadAsync({
    "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

import AddInput from './Components/AddInput';

export default function App() {

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

  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content"
          backgroundColor="rgba(249,242,234,255)"/>
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            console.log(item)
          )}
        />

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
