import React, {useEffect} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styled from 'styled-components';

export function SplashScreen ({navigation}) {

useEffect (() => {setTimeout(() => {navigation.navigate('Home');},2500)})

return(
    <ComponentContainer>
        {/* <View style={styles.container}> */}
            <Image
                source={require("./assets/logo.png")}
             />  
        {/* </View> */}
    </ComponentContainer>
);
}

/* const styles= StyleSheet.create ({ 
    container: {
        
    }
}) */

const ComponentContainer = styled.View`
  background-color: rgba(249,242,234,255);
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`; 