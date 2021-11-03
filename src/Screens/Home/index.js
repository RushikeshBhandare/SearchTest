import React, { useEffect, useState } from 'react'
import {View, FlatList, Text} from 'react-native'
import DisplayList from '../../Components/DisplayList'
import ListItem from '../../Components/ListItem'
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
        if(items){
            const list = items.filter((item)=>{
                return item.name.toLocaleLowerCase().includes(searchText.toLowerCase())
            })
            setFilterdItem(list)       
        }else{
            return
        }
    }

    // Add a random word in a items list 
    const addRandomWord = () =>{
        if(randomWords.length > 0){
            const word = randomWords[Math.floor(Math.random()*randomWords.length)]
            setItems([...items, {name: word}])
            setSearchText('')
        }else{
            // console.log('random word is undefinde')
            return
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
            
            {/* Display List Of items */}
            <DisplayList data={filterditem}/>
       
        </View>
    )
}


export default Home