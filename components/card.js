import {StyleSheet, Text, View } from 'react-native';
import { bigCardStyles } from '../styles/styles';


export function Card(myProps) {

    return (
        <View style={[bigCardStyles.superView]}>
          <View style={[bigCardStyles.container, bigCardStyles.elevation]}>
            <Text>{myProps.myProps}</Text>
        </View>  
        </View>
        
    );
}

