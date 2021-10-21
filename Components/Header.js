import React, { Component } from "react";
import styled from "styled-components";

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
    return (
        <ComponentContainer>
            <HeaderText>𓆸 Today's to do</HeaderText>
            <HeaderList> {today} </HeaderList> 
        </ComponentContainer>
    ); 
}

const ComponentContainer = styled.View`
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.Text`
  margin-top: 60px;
  color: brown;
  font-size: 30px;
  font-family: "PingFangSC-Medium";
`;

const HeaderList = styled.Text`
  margin-top: 74px;
  color: brown;
  font-size: 20px;
  margin-right: 20px;
  font-family: "PingFangTC-Light"; 
`;