import React from "react";
import {View, TextInput, StyleSheet} from 'react-native'

const SearchBar = () => {

    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput}placeholder="Search here..."/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: '100%',
        height: 50,
        backgroundColor: 'gray',
        borderRadius: 8 
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        display: "flex",
        justifyContent: "center"
        
    }
})

export default SearchBar;