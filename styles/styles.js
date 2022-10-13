import { StyleSheet, Dimensions } from 'react-native';

export const pageStyles = StyleSheet.create({
	text: {
		fontSize: 20,
        color: "blue",
	},
});

export const danneShoplist = StyleSheet.create({
    shoplistContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: "#0005",
    },
    searchBar: {
        width: "50%",
        height: 30,
        backgroundColor: "gray",
        borderRadius: 10,
        margin: 10,
    },
    headerContainer: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    headerText: {
    },
    filterButton: {
    },
    shoppingItemsContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: 20,
    },
    sheetContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        backgroundColor: "red",
    },
});