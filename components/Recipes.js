import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import { Card } from './Card';
import { bigCardStyles } from '../styles/styles';

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

    const renderItem = ({ item }) => (
        <Card title={item.title} style={bigCardStyles.container} isSmallCard={false}/>
    );

    return (

        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
        />
    );
}

export default Recipes;