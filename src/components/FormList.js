import React from 'react'
import { StyleSheet, View, TextInput, Button} from 'react-native'

const FormList = (props)=>(
    <View style={styles.inputContainer}>
        <TextInput
            style={{ height: 50 }}
            placeholder="an awesome place"
            value={props.placeName}
            onChangeText={props.handleChange}
            style={styles.placeInput}
        />
        <Button
          title="Clean"
          style={styles.placeButton}
          onPress={props.removeAllList} />
        <Button title="add"
            style={styles.placeButton}
            onPress={props.placeSubmitHandle} />
    </View>
)

const styles = StyleSheet.create({

    inputContainer: {
        //flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    placeInput: {
      width: '60%'
    },
    placeButton: {
      width: '15%'
    },
})

export default FormList;