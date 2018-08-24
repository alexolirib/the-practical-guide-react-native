import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FormList from './src/components/FormList';
import List from './src/components/List';
// import placeImage from './src/image/ambiente.jpg';

export default class App extends React.Component {

  state = {
    placeName: '',
    place: []
  }

  removeItem = key => {
    //alert("o Id desse elemento é  - " + index)
    this.setState(prevState => {
      return {
        place: prevState.place.filter(place => {
          return place.key !== key; // retorna os elementos
        })
      }
    })
  }

  handleChange = (text) => {
    this.setState({ placeName: text })
  }

  removeAllList = ()=>{
    this.setState({place:[]})
  }
  placeSubmitHandle = () => {
    if (this.state.placeName.trim() == '') {
      return;
    }
  
    this.setState(prevState => {
      return {
        place: prevState.place.concat({
          key: Math.random().toString(),
          value: prevState.placeName,
          // image: placeImage
          image: {
            uri: 'https://blogs.universal.org/bispomacedo/wp-content/uploads/2016/07/dest_bm0207-706x432.jpg'
          }
        })
      }
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <FormList
          placeName={this.state.placeName}
          removeAllList={this.removeAllList}
          handleChange={this.handleChange}
          placeSubmitHandle={this.placeSubmitHandle}
        />
        <List
          onItemDeleted={this.removeItem}
          place={this.state.place}
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, //por default ele é direcionado como column
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  styleButton: {
    flex: 1
  }
});
