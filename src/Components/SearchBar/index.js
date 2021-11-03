import React from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

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
                <Text>
                    Add
                </Text>
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
        justifyContent: 'space-around'
    },
      
    input: {
        width: '80%',
        borderWidth: 1,
        height: 50,
        fontSize: 18
    },  
    button:{
        width: 50,
        height: 50,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default SearchBar