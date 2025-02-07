import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/colors";

const { width } = Dimensions.get("window");

const people = [
    {
        id: 1,
        name: "Jane Smith",
        rating: 4.5,
        images: [
            require("../assets/images/FemaleTrainer.png"),
            require("../assets/images/lady2.jpg"),
            require("../assets/images/Lady1.jpg"),
        ],
    },
    {
        id: 2,
        name: "John Doe",
        rating: 4.8,
        images: [
            require("../assets/images/man1.jpg"),
            require("../assets/images/man2.jpg"),
            require("../assets/images/man3.jpg"),
        ],
    },
];

const Trainers = () => {
    const [liked, setLiked] = useState({});
    const [currentIndex, setCurrentIndex] = useState({});

    const handleLike = (id) => {
        setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleScroll = (event, id) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / (width * 0.6));
        setCurrentIndex((prev) => ({ ...prev, [id]: index }));
    };

    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>Our Trainers</Text>
                <TouchableOpacity>
                <Text style={{ color: Colors.textBlack, fontSize: 12, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {people.map((person) => (
                    <View key={person.id} style={{ marginHorizontal: 10, width: width * 0.6 }}>
                        <View style={{ position: "relative" }}>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                showsHorizontalScrollIndicator={false}
                                onScroll={(event) => handleScroll(event, person.id)}
                                scrollEventThrottle={16}
                            >
                                {person.images.map((img, index) => (
                                    <Image
                                        key={index}
                                        source={img}
                                        style={{
                                            width: width * 0.6,
                                            height: 200,
                                            borderRadius: 10,
                                        }}
                                    />
                                ))}
                            </ScrollView>
                            <TouchableOpacity
                                onPress={() => handleLike(person.id)}
                                style={{
                                    position: "absolute",
                                    top: 10,
                                    right: 10,
                                    backgroundColor: Colors.buttonBorder,
                                    borderRadius: 20,
                                    padding: 5,
                                }}
                            >
                                <Ionicons
                                    name={liked[person.id] ? "heart" : "heart-outline"}
                                    size={24}
                                    color={liked[person.id] ? Colors.red : Colors.icon}
                                />
                            </TouchableOpacity>

                            <View
                                style={{
                                    flexDirection: "row",
                                    position: "absolute",
                                    bottom: 10,
                                    alignSelf: "center",
                                }}
                            >
                                {person.images.map((_, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            width: currentIndex[person.id] === index ? 10 : 8,
                                            height: currentIndex[person.id] === index ? 10 : 8,
                                            borderRadius: 10,
                                            margin: 3,
                                            backgroundColor: "white",
                                            alignItems: "center",
                                            alignContent: "center"
                                        }}
                                    />
                                ))}
                            </View>
                        </View>

                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: "500",
                                marginTop: 8,
                                fontFamily: 'Poppins-Regular',
                                color: Colors.regularBlack
                            }}
                        >
                            {person.name}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
                            <Ionicons name="star" size={14} color={Colors.red} />
                            <Text style={{ fontSize: 13, fontWeight: "500", marginLeft: 4, fontFamily: 'Poppins-Regular', color: Colors.regularBlack }}>
                                {person.rating}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default Trainers;
