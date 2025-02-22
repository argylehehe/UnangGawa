import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { loginstyle } from "./src/styles/MainStyle";

const App = () => {
  const [username,setUsername]=useState(' ')
  const [firstname,setFirstname]=useState(' ')

  const handlePress=()=>{
    setUsername('aribayag')
  }
  return (
      <View style={loginstyle.container}>
        <Image
        style={loginstyle.ImageContainer}
        source={require("./src/assets/sheesh.webp")}>


        </Image>

        <TextInput
        style={loginstyle.TextInput}
        value = {username}
        onChangeText={(text) => setUsername(text)}>

        </TextInput>
        <TextInput
        style={loginstyle.TextInput}
        value = {firstname}
        onChangeText={(text) => setFirstname(text)}>

        </TextInput>

        <TouchableOpacity onPress={handlePress}>
          <Image
            style={loginstyle.ImageContainer}
            source={require("./src/assets/sheesh.webp")}
          />
        </TouchableOpacity>


      <Text>
        hello WORLD
      </Text>
      </View>
  );
}

export default App
