import React from "react";
import { View } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function TodoList({ item, deleteItem }) {
    return (
        <ComponentContainer>
            <ListContainer>
                   <CirlceContainer>
                       <Entypo name= "circle" size={20} color="rgba(249,242,234,255)" />
                   </CirlceContainer>
                    <View>
                       <TextItem>{ item.value }</TextItem>
                    </View>
                <IconContainer onPress={() => deleteItem(item.key)}>
                    <MaterialIcons name='delete' size={24} color="brown" />
                </IconContainer>
            </ListContainer>
        </ComponentContainer>
    );
}

const ListContainer = styled.TouchableOpacity`
  background-color: white;
  height: auto;
  width: 350px;
  margin-bottom: 15px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  margin-top: 15px;
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
  margin-top: 15px;
  margin-right: 20px;
  font-family: "PingFangTC-Light"; 
`;

const TextDate = styled.Text`
  color: black;
  font-size: 15px;
  margin-right: 20px;
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