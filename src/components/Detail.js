import React from 'react'
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native'

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
                    <Button title="Delete" color="red" onPress={props.onModalRemove}/>
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
    }
})

export default Detail;