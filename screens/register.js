import React from "react";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity,ImageBackground } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const image = { uri: "https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/8274.png.transform/cc-width-720-height-540/image.png" };

const Register = ({ navigation }) =>{
  return (
    
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <View style={styles.carContainer}>
      <View style={styles.pro}>
      <Image style={styles.Logo}      
            source={require('../assets/logo.png')} />
                       </View>
        <View style={styles.titles}>
         
         
          <Text style={styles.subtitle}>Get Registered...!</Text>          
        </View>
          <View style={styles.inputt}>
              <View style={styles.design}>
              <Entypo style={styles.icon} name="user" size={24} color="black" /> 
              <TextInput
              style={styles.input} 
              placeholder="Enter Name"
              />
              </View>
              <View style={styles.design}>
              <Feather style={styles.icon} name="eye-off" size={24} color="black" />   
              <TextInput
              style={styles.input} 
              placeholder="Enter Email Address"
              />
              </View>
              <View style={styles.design}>
              <Feather style={styles.icon} name="eye-off" size={24} color="black" />   
              <TextInput
              style={styles.input} 
              placeholder="Enter Password"
              />
              </View>
              <View style={styles.design}>
              <Feather style={styles.icon} name="eye-off" size={24} color="black" />   
              <TextInput
              style={styles.input} 
              placeholder="Re-Enter Password"
              />
              </View>

           </View>     
         
          

      <TouchableOpacity onPress={() => navigation.navigate("DashBoard")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>Register</Text>  
          </View> 
        </TouchableOpacity> 
      
      </View>  
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  carContainer: {
    width: "100%",
    height: "100%",
  },
  pro:{
    marginTop: "40%",
    alignItems: "center",
    justifyContent: "center",
  },

  Logo:{
    height:100,
    width:200
  },

  text:{
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    color: '#686868',
    fontSize: 16
  },
  
  input:{
    width:200
  },

  inputt: {
    alignItems: "center",
    justifyContent: "center",
  },

  buttons: {
      
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#FFB6C1',
    marginVertical:10,
  },
  design:{
    flexDirection: 'row',
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 7,
    backgroundColor:"#fadadd",    
    borderColor:"#fadadd"
     
  },
  icon:{
    marginRight:10,
    marginTop:2,
    color:'#c4c3d0'
    
  },
  
  titles: {
    marginTop: "10%",     
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default Register;
