import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'; 



const Header = () => {

    return(
        <View style={style.header}>
            <Text style={style.text} >Shopping List</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        backgroundColor: '#223843',
        height: 70,
        paddingTop: 25,
        
    },
    text: {
        fontSize: 30,
        color: '#CCFBFE',
        textAlign: 'center',

    }
});


export default Header;