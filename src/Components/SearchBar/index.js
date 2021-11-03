import React from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native'

import {Plus} from '../../Assets/Images'

const SearchBar = ({value, setValue, onPress}) =>{
    return(
        <View 
            style={styles.rootContainer}
        >   
                {/* Text Input */}
                <TextInput
                    value={value}
                    style={styles.input}
                    placeholder="Search"
                    onChangeText={setValue}
                />

            {/* Button  */}
            <TouchableOpacity 
                onPress={onPress}
                style={styles.button}
            >
                <Image
                    style={styles.buttonImage}
                    source={Plus}
                />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    rootContainer:{ 
        width:'100%',
        borderWidth: 1,
        height: 80,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
        padding: 10
    },
      
    input: {
        width: '80%',
        borderWidth: 1,
        height: 50,
        fontSize: 24,
        borderRadius: 10,
        paddingLeft: 10,
    },  
    button:{
        width: 60,
        height: 60,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImage:{
        width:60,
        height: 60    
    }

})

export default SearchBar