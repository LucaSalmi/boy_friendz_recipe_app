import { StyleSheet, Dimensions } from 'react-native';

export const pageStyles = StyleSheet.create({
	text: {
		fontSize: 20,
		color: "blue",
	},
});

export const bigCardStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		height: '80%',
		width: '85%',
		borderRadius: 25,
		borderWidth: 1
	},
	elevation: {
		elevation: 30,
		shadowColor: '#52006A',
	},
	superView: {
		flex: 1,
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
		alignItems: 'center',
		justifyContent: 'center',
	},
})