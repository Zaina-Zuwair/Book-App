import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,    
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from "react-native-gesture-handler";


export default class SearchBooks extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    var data = [
      {
        name: "Harry Potter",
        author: "JK Rowling",
        img: "https://cdn.shopify.com/s/files/1/0272/7087/3174/products/988a1468834fa6be5db9127b97050c41_600x.jpg?v=1597739313",
        description:
          "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
          press:()=>this.props.navigation.navigate("Harry Potter"),
      },
      {
        name: "Percy Jackson",
        author: "Rick Riordan",
        img: "https://www.u-buy.jp/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvMGM2N2JiZmEtMjU3MC00YzE5LWIwYmQtODgyY2MyZWRlZjg1XzEuMDk4NjZkNTZlM2ZkYzNjYmQwOWE5MGFhMzA0ZjE4MjEuanBlZw.jpg",
        description:
          "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words.",
          press:()=>this.props.navigation.navigate("PercyJackson"),
      },
      {
        name: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        img: "https://jumpbooks.lk/onojyglu/2018/12/A-Short-History-of-Nearly-Everything.jpg",
        description:
          "Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.",
        
      },
      {
        name: "Blink",
        author: "Malcolm Gladwell",
        img: "https://images-na.ssl-images-amazon.com/images/I/81oMQeXD1PL.jpg",
        description:
          "The Power of Thinking Without Thinking is Malcolm Gladwell's second book. It presents in popular science format research from psychology and behavioral economics on the adaptive unconscious: mental processes that work rapidly and automatically from relatively little information.",
       
      },
      {
        name: "What If?",
        author: "Randall Munroe",
        img: "https://images-na.ssl-images-amazon.com/images/I/61VsXzoAfDL.jpg",
        description:
          "Serious Scientific Answers to Absurd Hypothetical Questions is a 2014 non-fiction book by Randall Munroe in which the author answers hypothetical science questions sent to him by readers of his webcomic, xkcd.",
        
      },
      {
        name: "Hobbit",
        author: "Alan Moore",
        img: "http://1.bp.blogspot.com/-tz40y0OlrCc/VGfG-NmL_AI/AAAAAAAAAJg/JVArqytkaOE/s1600/81Dd%2BimpKAL.jpg",
        description:
          "Jerusalem is a novel by British author Alan Moore, wholly set in and around the author's home town of Northampton, England. Combining elements of historical and supernatural fiction and drawing on a range of writing styles, the author describes it as a work of 'genetic mythology'.",
        
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = (event) => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == "") {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter((l) => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  separator = () => {
    return (
      <View style={{ height: 10, width: "100%", backgroundColor: "#121212" }} />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        
        <View style = {styles.design}>
     <FontAwesome style={styles.icon} name="search" size={24} color="white" />
      <TextInput style = {styles.searchBar} placeholder="Search here"
            
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            
          />
        </View>

        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={item.press}>
                <View style={styles.bookContainer}>
                  <Image style={styles.image} source={{ uri: item.img }} />
                  <View style={styles.dataContainer}>
                    <Text numberOfLines={2} style={styles.title}>
                      {item.name}
                    </Text>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text numberOfLines={4} style={styles.description}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

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
  bookContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#d1d8e0",
  },
  image: {
    height: 150,
    width: 100,
    marginLeft: 5,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
  },
  author: {
    fontSize: 16,
  },
 
});
