import React, { useEffect, useState } from 'react'
import {View, FlatList, Text} from 'react-native'
import ListItem from '../../Components/ListItem'
import ResultNotFound from '../../Components/ResultNotFound'
import SearchBar from '../../Components/SearchBar'

// data
const data = [
    {
        name: 'Milk'
    },
    {
        name: 'Coffee'
    },
    {
        name: 'Orenges'
    },
    {
        name: 'Bread'
    },
]

// randome words 
const randomWords = [
    'Apple',
    'Berries',
    'melons',
    'Banana',
    'Litchi'
]

const Home = ( ) =>{
    const [searchText, setSearchText] = useState('')
    const [items, setItems] = useState(data)
    const [filterditem, setFilterdItem ] = useState(items)


    useEffect(()=>{
        filterList()
    },[searchText, items])

    // filter out the list that contain only search term 
    const filterList=()=>{
        const list = items.filter((item)=>{

            return item.name.toLocaleLowerCase().includes(searchText.toLowerCase())
        })
        setFilterdItem(list)       
    }

    // Add a random word in a items list 
    const addRandomWord = () =>{
        const word = randomWords[Math.floor(Math.random()*randomWords.length)]
        setItems([...items, {name: word}])
        setSearchText('')
    }

    // Render the List of items and check if the item is found or not
    const renderItem = ()=>{
        if(filterditem.length != 0){
            return(
                <FlatList
                    data={filterditem}
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
                <ResultNotFound />
            )
        }
    } 

    return(
        <View>
            {/* search bar */}
            <SearchBar
                value={searchText}
                setValue={setSearchText}
                onPress={addRandomWord}
            />
            
            {/* render the list of items */}
           {renderItem()}
       
        </View>
    )
}


export default Home