import React from "react";
import styled from "styled-components";

export default function Empty() {
    return (
        <ComponentContainer>
            <EmptyImage
                source={require("../assets/flowers.png")}
            />
            <EmptyText> It's time to add some Todos girl! </EmptyText>
        </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const EmptyImage = styled.Image`
  width: 100px;
  height: 200px;
`;

const EmptyText = styled.Text`
  color: brown;
  margin-top: 30px;
  font-size: 25px;
  font-family: "PingFangTC-Light"; 
`;