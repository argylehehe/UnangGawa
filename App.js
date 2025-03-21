import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { loginstyle } from "./src/styles/MainStyle";  // Import styles

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const handlePress = () => {
    console.log("Registered:", { firstname, lastname, phone, address, email });
  };

  return (
    <View style={loginstyle.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Register</Text>
      <Image style={loginstyle.ImageContainer} source={require("./src/assets/sheesh.webp")} />
      
      
      <TextInput
        style={loginstyle.TextInput}
        value={firstname}
        onChangeText={setFirstname}
        placeholder="Enter First Name"
      />
      
      
      <TextInput
        style={loginstyle.TextInput}
        value={lastname}
        onChangeText={setLastname}
        placeholder="Enter Last Name"
      />
      
      
      <TextInput
        style={loginstyle.TextInput}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
      />
      
      
      <TextInput
        style={loginstyle.TextInput}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter Address"
      />
      
      
      <TextInput
        style={loginstyle.TextInput}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Email"
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={loginstyle.button} onPress={handlePress}>
        <Text style={loginstyle.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
