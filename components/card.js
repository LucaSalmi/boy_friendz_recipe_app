import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';


export function Card(myProps) {

    return (
        <View style={[styles.container, styles.elevation]}>
            <Text>{myProps.myProps.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '75%',
        width: '90%',
        borderRadius: 50,
        borderWidth:1
    },
    elevation: {
        elevation: 30,
        shadowColor: '#52006A',
      },
})