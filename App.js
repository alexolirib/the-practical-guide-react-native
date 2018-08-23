import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: '',
    place: []
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
        place: prevState.place.concat(prevState.placeName)
      }
    })
  }

  render() {
    const placesOutput = this.state.place.map((p, i) => (
      <View key={i}>
        <Text>{p}</Text>
      </View>
    ))
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ height: 90 }}
            placeholder="an awesome place"
            value={this.state.placeName}
            onChangeText={this.handleChange}
            style={styles.placeInput}
          />
          <Button title="add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandle} />
        </View>
        {placesOutput}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //por default ele é direcionado como column
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
