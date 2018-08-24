import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import FormList from './src/components/FormList';
import List from './src/components/List'

export default class App extends React.Component {

  state = {
    placeName: '',
    place: ['teste1', 'teste2']
  }

  handleChange = (text) => {
    this.setState({ placeName: text })
  }

  placeSubmitHandle = () => {
    if (this.state.placeName.trim() == '') {
      return;
    }

    this.setState(prevState => {
      return {
        place: prevState.place.concat(prevState.placeName),
        placeName: ''
      }
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <FormList
          placeName={this.state.placeName}
          handleChange={this.handleChange}
          placeSubmitHandle={this.placeSubmitHandle}
        />
        <List 
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
  }
});
