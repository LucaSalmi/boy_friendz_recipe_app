import { StyleSheet, Text, View, TextInput, Button, ScrollView, Animated } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { danneShoplist } from '../styles/styles.js';

const Shoplist = (props) => {

    const [showSheet, setShowSheet] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    const startSheetAnimation = () => {
        setShowSheet(!showSheet)
        Animated.timing(
            fadeAnim,
            {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true, // <-- Add this
            }
          ).start();
    }   

	return (
        <View style={danneShoplist.shoplistContainer}>
            <View style={danneShoplist.searchBar}></View>
            <View style={danneShoplist.headerContainer}>
                <Text style={danneShoplist.headerText}>SHOPLIST PAGE!</Text>
                <Button style={danneShoplist.filterButton} title="FILTER" onPress={() => { startSheetAnimation() }}></Button>
            </View>

            <View style={showSheet ? {display: "none"} : danneShoplist.shoppingItemsContainer}>
                <Text>Item 1</Text>
                <Text>Item 2</Text>
                <Text>Item 3</Text>
            </View>
            
            <Animated.View style={showSheet ? danneShoplist.sheetContainer : {display: "none"}}>
                <Text>SHEET</Text>
            </Animated.View>
        </View>
        
	);
}

export default Shoplist;