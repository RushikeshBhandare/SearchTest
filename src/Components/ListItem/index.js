import React from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

const Listitem = ({name}) =>{
    return(
        <View 
            style={styles.rootContainer}
        >   
            <View 
                style={styles.innerContainer}
            >
                <Text
                    style={styles.text}
                >
                    {name}
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    rootContainer:{ 
        width:'100%',
        // borderBottomWidth: 1,
        height: 80,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around'
    },
    innerContainer:{
        width:'90%',
        borderBottomWidth: 1,
    },
    text:{
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    }
  

})

export default Listitem