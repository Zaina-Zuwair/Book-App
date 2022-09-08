import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity,ImageBackground} from "react-native";
const image = { uri: "https://www.asianpaints.com/content/dam/asian_paints/colours/swatches/8274.png.transform/cc-width-720-height-540/image.png" };


const HarryPotter = ({navigation }) => {
  return (
   
    <View style={styles.container}>
       <View style={styles.carContainer}>
        
        <View style={styles.imagee}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
        <Image source={{ uri: "https://cdn.shopify.com/s/files/1/0272/7087/3174/products/988a1468834fa6be5db9127b97050c41_600x.jpg?v=1597739313" }} style={{ width: 300, height: 400 }} />
     </View>

        <View style={styles.titles}>
          <Text style={styles.title}>Harry Potter</Text>
          <Text style={styles.subtitle}>Author- J.k.Rowling</Text> 
          <Text style={styles.rating}>Ratings : &#9733;&#9733;&#9733;&#9733;&#9734;</Text>   
          <Text style={styles.subtitle}>Price-Rs.2000</Text>  
          <Text style={styles.subtitle}>Description-Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. 
          Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.</Text>
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

export default HarryPotter;
