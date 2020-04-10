import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Alert  } from 'react-native'; 


const AddItem = ({setItem, uid}) => {
    const [ value, setValue ] = useState()

    return(
        <TouchableOpacity>
            <View>
                <TextInput style={style.input} placeholder='Add Item...' value={value} onChangeText={setValue} />
                <Button title="ADD ITEM" onPress={ () => {
                    if(!value){
                        Alert.alert('Error', "Insert Item", [{text: 'OK'}])
                    }else{
                        setItem(prevItems => {
                            return [{id: uid(), text: value}, ...prevItems]
                        })
                        setValue('')
                    }

                    
                    }} />
            </View>
        </TouchableOpacity>
        
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth:1,
    },
    btn: {

    }
});


export default AddItem;