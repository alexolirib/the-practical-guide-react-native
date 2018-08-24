import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image resizeMode="contain" source={props.placeImg} style={styles.placeImagem} />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImagem: {
        marginRight: 8,
        height: 40,
        width: 40
    }
})

export default ListItem;