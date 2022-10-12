import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { danneShoplist } from '../styles/styles.js';

const Shoplist = (props) => {

    const [showSheet, setShowSheet] = useState(false);

    const [items, setItems] = useState([{desc: "Några pallar äpplen", checked: true}, {desc: "En trave bananer", checked:false}, {desc: "Ett litet, litet bär", checked:false}]);

    

	return (
        <View style={danneShoplist.shoplistContainer}>
            <View style={danneShoplist.searchBar}></View>
            <View style={danneShoplist.headerContainer}>
                <Text style={danneShoplist.headerText}>SHOPLIST PAGE!</Text>
                <Button style={danneShoplist.filterButton} title="FILTER" onPress={() => { setShowSheet(!showSheet) }}></Button>
            </View>

            <View style={showSheet ? {display: "none"} : danneShoplist.shoppingItemsContainer}>
                {items.map((item, i)=><ItemRow key={i} itemName={item.desc} checked={item.checked}/>)}
            </View>
            
            <View style={showSheet ? danneShoplist.sheetContainer : {display: "none"}}>
                <Text>SHEET</Text>
            </View>
        </View>
        
	);
}

const ItemRow = (props) => {

    const [isReady, setIsReady] = useState(false);

    const [checked, setChecked] = useState(props.checked);

    const buttonPress = () => {

        setChecked(!checked);
        
    };

    useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 1000);
    });

    return(
        <View style={{paddingTop: 5, paddingBottom: 5}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {isReady ? <Text>{props.itemName}</Text> : <Text>Loading...</Text>}
                {isReady ? <Button title={checked ? "X" : "0"} onPress={() => {buttonPress()}}></Button> : <Text>...</Text>}
            </View>

            <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}/>

        </View>
         
    );

}

export default Shoplist;