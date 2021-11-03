import React from "react";
import {FlatList} from 'react-native'

import ResultNotFound from '../../Components/ResultNotFound'
import ListItem from "../ListItem";

const DisplayList = ({data}) => {
    // check if the data array has any elements or not 
    if(data.length != 0){
        return(
            <FlatList
                data={data}
                renderItem={({item})=>{
                    return(
                    <ListItem
                            name={item.name}
                    />
                    )
                }}
        />
        )
    }else{
        return(
            // simple result not fount text component
            <ResultNotFound />
        )
    }
}

export default DisplayList