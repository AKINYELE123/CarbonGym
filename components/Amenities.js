import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Button from './Button';
import Boxing from "../assets/svgs/Boxing.svg"
import Acrobatics from "../assets/svgs/Acrobatics.svg"
import BasketBall from "../assets/svgs/basketBall.svg"
import Cycling from "../assets/svgs/cycling.svg"

const Amenities = () => {

    const ROW_ITEMS = [
        { name: "Martial Arts", icon: <Boxing /> },
        { name: "Acrobatics", icon: <Acrobatics /> },
        { name: "Cycling", icon: <Cycling /> },
        { name: "Basketball", icon: <BasketBall /> }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Amenities</Text>
            <Text style={styles.subtitle}>This is a list of all our amenities</Text>

            <View style={styles.itemsContainer}>
                {ROW_ITEMS.map((item, index) => (
                    <View key={index} style={styles.itemRow}>
                        {item.icon}
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Show All Amenities" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
    title: {
        color: Colors.textBlack,
        fontSize: 17,
        fontWeight: "500",
        fontFamily: 'Poppins-Regular',
    },
    subtitle: {
        color: Colors.textGrey,
        fontSize: 12,
        fontWeight: "500",
        fontFamily: 'Poppins-Regular',
        marginBottom: 5,
    },
    itemsContainer: {
        marginVertical: 10,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemText: {
        color: Colors.regularBlack,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginLeft: 10,
        fontWeight: "700"
    },
    buttonContainer: {
        marginTop: 8,
    },
});

export default Amenities;
