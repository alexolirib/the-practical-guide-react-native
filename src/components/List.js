import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListItem from './ListItem/ListItem'

class List  extends React.Component {


    render() {
        const placesOutput = this.props.place.map((p, i) => (
            <ListItem key={i} placeName={p} />
        ))
        return (
            <View style={styles.listContainer}>{placesOutput}</View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default List;