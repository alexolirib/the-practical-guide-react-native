import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import ListItem from './ListItem/ListItem'

class List extends React.Component {

    render() {
        // const placesOutput = this.props.place.map((p, i) => (
        //     <ListItem
        //      key={i} 
        //     element={this.props.element}
        //     placeName={p} 
        //     onItemPressed={()=> this.props.onItemDeleted(i)} />
        // ))
        // return (
        //     <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
        // )
        return <FlatList
            style={styles.listContainer}
            data={this.props.place}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.value}
                    placeImg={info.item.image}
                    onItemPressed={() => this.props.onItemDeleted(info.item.key)}
                />
            )}
        />
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default List;