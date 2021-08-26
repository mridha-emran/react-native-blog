
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';
import { useHistory } from "react-router-native";
import Home from './Home';


export default function Login() {
    const history = useHistory();
    const [userID, setUserId] = useState('');
    

    const handlePress = () => {
        if (userID.length < 10 && userID.length > 1) {
            history.push("/Home");
          } else {
            Alert.alert('userID minimum 10 characters');
          }
	};
  return (
    <View style={styles.container}>
       <TextInput style={styles.inputText} onChangeText={setUserId} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
             <Text style={styles.loginBut}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputText: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },

   loginBut: {
    textAlign: "center",
    color: "red",
  },


});