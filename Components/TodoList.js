import React from "react";
import { View } from 'react-native';
import styled from "styled-components";

export default function TodoList({ item }) {
    return (
        <ComponentContainer>
            <ListContainer>
                <View>
                    <TextItem>{ item.value }</TextItem>
                    <TextTask> Task </TextTask>
                </View>
            </ListContainer>
        </ComponentContainer>
    );
}

const ListContainer = styled.TouchableOpacity`
  background-color: white;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
  font-family: poppins-regular;
`;

const TextDate = styled.Text`
  color: black;
  font-size: 15px;
  margin-right: 20px;
  font-family: poppins-regular;
  border-radius: 10px;
  width: 40px;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-top: 15px;
  height: 40px;
  border-radius: 10px;
`;

const CirlceContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;