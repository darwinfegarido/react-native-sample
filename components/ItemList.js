import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemList = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={style.listItem}>
            <View style={style.listItemView}>
                <Text style={style.text} > 
                    {item.text} 
                </Text>
                <View style={style.iconView}>
                    <Icon name='trash' size={25} color='#900' onPress={() => deleteItem(item.id)}/>
                </View>
                
            </View>
        </TouchableOpacity>
        
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 18,
    },
    listItem: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconViews: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 70,
    }
});


export default ItemList;