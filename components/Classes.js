import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../constants/colors';
import Fire from "../assets/svgs/fire.svg"

const items = [
    {
        id: 1,
        title: "Gym Workout",
        description: "Stay fit and active",
        image: require('../assets/images/Ballon.png'),
        time: "60mins",
        fire: false,
    },
    {
        id: 2,
        title: "Yoga Class",
        description: "Relax your mind",
        image: require('../assets/images/Yoga.png'),
        time: "60mins",
        fire: true,
    },
]

const Classes = () => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id) => {
        setFavorites((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>Upcoming Class</Text>
                <TouchableOpacity>
                    <Text style={{ color: Colors.textBlack, fontSize: 12, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                {items.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.image} />
                            <TouchableOpacity
                                style={styles.heartIcon}
                                onPress={() => toggleFavorite(item.id)}
                            >
                                <Ionicons
                                    name="heart"
                                    size={20}
                                    color={favorites[item.id] ? Colors.red : Colors.icon}
                                />
                            </TouchableOpacity>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>{item.time}</Text>
                            </View>
                        </View>

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>Gym Group</Text>
                        <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center" }}>
                            <Text style={styles.boxing}>Boxing</Text>
                            <View style={{ backgroundColor: Colors.textGrey, borderRadius: 30, height: 6, width: 6, }} />
                            <Text style={styles.date}>2nd Sept</Text>
                        </View>
                        <Text style={styles.time}>Starting at 2:30am</Text>
                        <View style={{ flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", gap: 1 }}>
                                <Text style={styles.price}>1200</Text>
                                <Text style={styles.discount}>AED 500</Text>
                            </View>
                            {item.fire && <Fire />}
                        </View>
                    </View>
                ))}
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
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 20,
        marginTop: 12
    },
    card: {
        width: '48%',
        marginBottom: 15,
        backgroundColor: Colors.white,
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 190,
        borderRadius: 10,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: Colors.buttonBorder,
        padding: 5,
        borderRadius: 20,
    },
    labelContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: Colors.Tbackground,
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 2,
    },
    labelText: {
        color: Colors.textBlack,
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular'
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.textBlack,
        marginTop: 5,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular'
    },
    description: {
        fontSize: 10,
        color: Colors.textGrey,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
    },
    time: {
        fontSize: 12,
        color: Colors.textGrey,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
    },
    boxing: {
        fontSize: 12,
        color: Colors.regularBlack,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
    },
    date: {
        fontSize: 12,
        color: Colors.textGrey,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        fontWeight: '500',
    },
    price: {
        fontSize: 12,
        color: Colors.textGrey,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        textDecorationLine: "line-through"
    },
    discount: {
        fontSize: 12,
        color: Colors.textBlack,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
    },
});

export default Classes;
