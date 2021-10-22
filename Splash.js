import React, {useEffect} from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export function SplashScreen ({navigation}) {

useEffect (() => {setTimeout(() => {navigation.navigate('Home');},2000)})

return(
    <View style={styles.container}>
        <Text>Hello Flora</Text>
        {/* <Image
            source={require("../assets/icon.png")}
        />  */}
    </View>
);
}

const styles= StyleSheet.create ({ 
    container: {
        backgroundColor: 'red',
    }
})