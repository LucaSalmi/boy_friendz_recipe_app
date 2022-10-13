import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Dimensions } from 'react-native';
import { useState } from 'react';
import { Card } from './Card';
import { bigCardStyles } from '../styles/styles';
import Carousel from 'react-native-reanimated-carousel';

DATA = [
    {
        id: 0,
        title: 'first',
    },
    {
        id: 1,
        title: "second",
    },
    {
        id: 3,
        title: "third",
    },
    {
        id: 4,
        title: "fourth",
    },
]

const Recipes = () => {

    const width = Dimensions.get('window').width;
    const heigth = Dimensions.get('window').height;
    return (


        <Carousel
            loop
            width={width}
            height={heigth}
            autoPlay={true}
            pagingEnabled={true}
            data={DATA}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <Card title={DATA[index].title} style={bigCardStyles.container} isSmallCard={false} />
            )}
            panGestureHandlerProps={{
                activeOffsetX: [-10, 10],
            }}
        />
    );
}

export default Recipes;