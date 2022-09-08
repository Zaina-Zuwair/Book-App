import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity,ImageBackground} from "react-native";
const image = { uri: "https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/8274.png.transform/cc-width-720-height-540/image.png" };

const PercyJackson = ({navigation }) => {
  return (
    
    <View style={styles.container}>
       <View style={styles.carContainer}>
        <View style={styles.imagee}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
        <Image source={{ uri: "https://www.u-buy.jp/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMGM2N2JiZmEtMjU3MC00YzE5LWIwYmQtODgyY2MyZWRlZjg1XzEuMDk4NjZkNTZlM2ZkYzNjYmQwOWE5MGFhMzA0ZjE4MjEuanBlZw.jpg" }} style={{ width: 300, height: 400 }} />
     </View>

        <View style={styles.titles}>
          <Text style={styles.title}>Percy Jackson</Text>
          <Text style={styles.subtitle}>Author- Rick Riordan</Text> 
          <Text style={styles.rating}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9734;</Text>   
          <Text style={styles.subtitle}>Price-Rs.2000</Text>  
          <Text style={styles.subtitle}>Description-Percy Jackson & the Olympians is a pentalogy of fantasy novels written by American author Rick Riordan, 
          and the first book series in the Camp Half-Blood Chronicles. </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>Buy</Text>  
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
    backgroundColor: "#000000"
  },
  imagee:{
      justifyContent: "center",
      alignItems:"center", 

  },
  rating:{
    color:"red"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  text:{
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",   
    color: '#686868',
    fontSize: 16
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
      
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "600",
    color:"#FFFFFF"
  },

  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",

  }, 
});

export default PercyJackson;
