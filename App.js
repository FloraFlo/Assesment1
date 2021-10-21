import React, { useState } from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components';

import AddInput from './Components/AddInput';

export default function App() {
  const [data, setData] = useState([]);
  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content"
          backgroundColor="mindnightblue" />
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
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; 
