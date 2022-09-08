import React from "react";
import { StyleSheet,  Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
const image = { uri: "https://i.pinimg.com/originals/74/2d/3b/742d3b4b826bc6ddd0c5b0c090eb07b7.jpg" };

const Home = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <View style={styles.carContainer}>
      <View style={styles.pro}>
      <Image style={styles.Logo}      
            source={require('../assets/logo.png')} />
                       </View>    

        <View style={styles.titles}>
         
          
          <Text style={styles.subtitle}>The best choice for book lovers...</Text>          
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>LogIn</Text>  
          </View> 
        </TouchableOpacity>  
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>SignUp</Text>  
          </View> 
        </TouchableOpacity> 
      </View>
    </View>  
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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
    fontSize:16
  },

  buttons: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#FFB6C1',
    marginVertical:10,
  },

  carContainer: {
    width: "100%",
    height: "100%",
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

export default Home;
