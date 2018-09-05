import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const Detail = props => {

    let modelContent = null;
    if (props.selected) {
        modelContent = (
            <View>
                <Image source={props.selected.image} style={styles.imageStyle} />
                <Text style={styles.valueStyle}>{props.selected.value}</Text>
            </View>
        )
    }

    return (
        //onRequestClose - botão de voltar no android consiga fazer a tarefa
        <Modal
            onRequestClose={props.onModalClosed}
            visible={props.selected !== null}
            animationType="slide">
            <View style={styles.container}>
                {modelContent}
                <View>
                    <TouchableOpacity onPress={props.onModalRemove}>
                        <View style={styles.btnDelete}>
                            <Icon size={30} name="ios-trash" color="red" />
                        </View>
                    </TouchableOpacity>
                    {/* <Button title="Delete" color="red" onPress={props.onModalRemove}/> */}
                    <Button title="Close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    container: {
        margin: 22,
    },
    imageStyle: {
        width: "100%",
        height: 200
    },
    valueStyle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    btnDelete:{
        alignItems: "center"
    }
})

export default Detail;