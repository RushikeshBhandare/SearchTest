import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const ResultNotFound = () =>{
    return(
        <View 
            style={styles.rootContainer}
        >   
                <Text
                    style={styles.text}
                >
                    Result Not Found
                </Text>
            
        </View>

    )
}

const styles = StyleSheet.create({
    rootContainer:{ 
        height: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    text:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    }
  

})

export default ResultNotFound