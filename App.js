import {Navigation} from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth'

//Register Screens
Navigation.registerComponent("the-pratical-guide.AuthScreen", ()=> AuthScreen);

//start app
Navigation.startSigleScreenApp({
    screen: {
        screen: "the-pratical-guide.AuthScreen",
        title: "Login" 
    }
})

// import React from 'react';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import FormList from './src/components/FormList';
// import List from './src/components/List';
// import Detail from './src/components/Detail';
// import { connect } from 'react-redux'
// import { addPlace, deletePlace, selectPlace, deselectPlace, handlePlace, removeAllList} from './src/store/actions/index'

// class App extends React.Component {

//   // state = {
//   //   placeName: '',
//   //   place: [],
//   //   itemSelected: null
//   // }

//   placeSubmitHandle = () => { 
//     console.log("entrou")
//     this.props.onAddPlace();
//     // if (this.state.placeName.trim() == '') {
//     //   return;
//     // }

//     // this.setState(prevState => {
//     //   return {
//     //     place: prevState.place.concat({
//     //       key: Math.random().toString(),
//     //       value: prevState.placeName,
//     //       // image: placeImage
//     //       image: {
//     //         uri: 'https://blogs.universal.org/bispomacedo/wp-content/uploads/2016/07/dest_bm0207-706x432.jpg'
//     //       }
//     //     }),
//     //     placeName: ''
//     //   }
//     // })
//   }
//   handleChange = (text) => {
//     //this.setState({ placeName: text })
//     this.props.onHandlePlace(text);
//   }

//   removeAllList = () => {
//     this.props.onRemoveAllList();
//     //this.setState({ place: [] })
//   }
//   selectItem = key => {
//     this.props.onSelectPlace(key)
//     // this.setState(prevState => {
//     //   return {
//     //     itemSelected: prevState.place.find(p => {
//     //       return p.key === key;
//     //     })
//     //   }
//     // })
//   }

//   closedItem= ()=>{
//     this.props.onDeselectPlace()
//     //this.setState({itemSelected: null})
//   }

//   removeItem= ()=>{
//     this.props.onDeletePlace();
//     // this.setState(prevState=>{
//     //   return{
//     //     place: prevState.place.filter(p=>{
//     //       return prevState.itemSelected.key !== p.key
//     //     }),
//     //     itemSelected: null
//     //   }
//     // })
//   }

//   render() {

//     return (
//       <View style={styles.container}>
//         <Detail
//          selected={this.props.itemSelected} 
//          onModalClosed={this.closedItem}
//          onModalRemove={this.removeItem}
//          />
//         <FormList
//           placeName={this.props.placeName}
//           removeAllList={this.removeAllList}
//           handleChange={this.handleChange}
//           placeSubmitHandle={this.placeSubmitHandle}
//         />
//         <List
//           // onItemDeleted={this.removeItem}
//           onItemSelected={this.selectItem}
//           place={this.props.place}
//         />

//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1, //por default ele é direcionado como column
//     padding: 30,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   styleButton: {
//     flex: 1
//   }
// });
// const mapStateToProps = state => {
//   return {
//     placeName: state.place.placeName,
//     place: state.place.place,
//     itemSelected: state.place.itemSelected
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: () => dispatch(addPlace()),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace()),
//     onHandlePlace: (text) => dispatch(handlePlace(text)),
//     onRemoveAllList: () => dispatch(removeAllList())
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
