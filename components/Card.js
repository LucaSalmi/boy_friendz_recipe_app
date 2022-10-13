import {StyleSheet, Text, View } from 'react-native';
import { bigCardStyles } from '../styles/styles';


export function Card(myProps) {

    return (
        <View style={[bigCardStyles.superView]}>
          <View style={[myProps.style, bigCardStyles.elevation]}>
            <Text>{myProps.title}</Text>
        </View>  
        </View>
        
    );
}