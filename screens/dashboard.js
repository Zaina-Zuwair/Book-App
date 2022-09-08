import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';


const Books = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};


const DashBoard = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Search books")}>
     <View style = {styles.design}>
     <FontAwesome style={styles.icon} name="search" size={24} color="white" />
      <TextInput style = {styles.searchBar} placeholder="Search here"
      
      /> 
       </View></TouchableOpacity>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={CATEGORIES}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate("Harry Potter")}><Books item={item} /></TouchableOpacity>}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
         
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <Books item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default DashBoard;

const CATEGORIES = [
  {
    title: 'Fiction',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Harry Potter',
        uri: 'https://cdn.shopify.com/s/files/1/0272/7087/3174/products/988a1468834fa6be5db9127b97050c41_600x.jpg?v=1597739313',
      },
      {
        key: '2',
        text: 'Percy Jackson',
        uri: 'https://www.u-buy.jp/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMGM2N2JiZmEtMjU3MC00YzE5LWIwYmQtODgyY2MyZWRlZjg1XzEuMDk4NjZkNTZlM2ZkYzNjYmQwOWE5MGFhMzA0ZjE4MjEuanBlZw.jpg',
      },

      {
        key: '3',
        text: 'Narnia',
        uri: 'https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_FMjpg_UX1000_.jpg',
      },
      {
        key: '4',
        text: 'Hobbit',
        uri: 'http://1.bp.blogspot.com/-tz40y0OlrCc/VGfG-NmL_AI/AAAAAAAAAJg/JVArqytkaOE/s1600/81Dd%2BimpKAL.jpg',
      },
      {
        key: '5',
        text: 'Twilight',
        uri: 'https://m.media-amazon.com/images/I/4111GjzUqVL._SL500_.jpg',
      },
    ],
  },
  {
    title: 'Non-fiction',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Emperor of All Maladies',
        uri: 'https://jumpbooks.lk/onojyglu/2021/05/The-Emperor-of-All-Maladies.jpeg',
      },
      {
        key: '2',
        text: 'The Sixth Extinction',
        uri: 'https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale/jackets/9781408851234.jpg',
      },

      {
        key: '3',
        text: 'Blink',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/81oMQeXD1PL.jpg',
      },
      {
        key: '4',
        text: 'Thinking, Fast and Slow',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/71ch5LUadaL.jpg',
      },
      {
        key: '5',
        text: 'How to Do Nothing',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/91tBb2V3-fL.jpg',
      },
    ],
  },
  {
    title: 'Based on your recent listening',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'A Short History of Nearly Everything',
        uri: 'https://jumpbooks.lk/onojyglu/2018/12/A-Short-History-of-Nearly-Everything.jpg',
      },
      {
        key: '2',
        text: 'Finding the Mother Tree',
        uri: 'https://cdn2.penguin.com.au/covers/400/9780241389355.jpg',
      },

      {
        key: '3',
        text: 'What If?',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/61VsXzoAfDL.jpg',
      },
      {
        key: '4',
        text: 'The Grand Design',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/91Lp-IyJZ+L.jpg',
      },
      {
        key: '5',
        text: 'Entangled Life',
        uri: 'https://images-na.ssl-images-amazon.com/images/I/91vS+YL3t-L.jpg',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  design:{
    flexDirection: 'row',
    height: 35,
    width:"90%",
    margin: 10,
    borderWidth: 1,
    paddingRight:5,
    paddingLeft:5,
    backgroundColor:"#f4f4f4",
    borderRadius:8,
    borderColor:"#fadadd"
     
  },
  icon:{
    marginRight:10,
    marginTop:5,
    color:'#c4c3d0'
    
  },


  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
});