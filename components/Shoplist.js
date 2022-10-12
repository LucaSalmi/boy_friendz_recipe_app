import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { danneShoplist } from '../styles/styles.js';

const Shoplist = (props) => {

    const [showSheet, setShowSheet] = useState(false);

    const [items, setItems] = useState(["Några pallar äpplen", "En trave bananer", "Ett litet, litet bär"]);

	return (
        <View style={danneShoplist.shoplistContainer}>
            <View style={danneShoplist.searchBar}></View>
            <View style={danneShoplist.headerContainer}>
                <Text style={danneShoplist.headerText}>SHOPLIST PAGE!</Text>
                <Button style={danneShoplist.filterButton} title="FILTER" onPress={() => { setShowSheet(!showSheet) }}></Button>
            </View>

            <View style={showSheet ? {display: "none"} : danneShoplist.shoppingItemsContainer}>
                {items.map((itemName)=><ItemRow key={itemName} itemName={itemName}/>)}
            </View>
            
            <View style={showSheet ? danneShoplist.sheetContainer : {display: "none"}}>
                <Text>SHEET</Text>
            </View>
        </View>
        
	);
}

const ItemRow = (props) => {

    return(
        <View style={{paddingTop: 5, paddingBottom: 5}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{props.itemName}</Text>
                <Button title="X"></Button>
            </View>

            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>

        </View>
         
    );

}

export default Shoplist;