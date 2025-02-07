import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from './Button';

const Reviews = () => {

    const reviews = [
        { id: 1, name: "John Doe", rating: 4.5, comment: "This is a great gym, super spacious, clean, never too busy (at least not at the times I’ve been). Loads of barbells...!" },
        { id: 2, name: "Jane Smith", rating: 3.8, comment: "This is a great gym, super spacious, clean, never too busy (at least not at the times I’ve been). Loads of barbells..." },
        { id: 3, name: "Michael Lee", rating: 5.0, comment: "This is a great gym, super spacious, clean, never too busy (at least not at the times I’ve been). Loads of barbells..." },
        { id: 4, name: "Emma Wilson", rating: 4.2, comment: "This is a great gym, super spacious, clean, never too busy (at least not at the times I’ve been). Loads of barbells..." },
    ];

    return (
        <View>
            <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>Reviews</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center", marginTop: 5 }}>
                <View style={{ flexDirection: "row", }}>
                    <Ionicons
                        name={'star'}
                        size={15}
                        color={Colors.red}
                        style={{ fontFamily: "Poppins-Regular", marginRight: 2 }}
                    />
                    <Text style={{ marginRight: 2, color: Colors.textBlack, fontSize: 12, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>Overall</Text>
                    <Text style={{ marginRight: 2, color: Colors.textBlack, fontSize: 12, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>3.9</Text>
                </View>
                <View>
                    <Text style={{ color: Colors.textBlack, fontSize: 12, fontWeight: "500", textDecorationLine: "underline", fontFamily: 'Poppins-Regular' }}>12 reviews</Text>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                paddingVertical: 10,
            }}>
                {reviews.map((review) => (
                    <View key={review.id} style={{
                        padding: 15,
                        borderRadius: 5,
                        width: 250,
                        marginRight: 10,
                        borderWidth: 0.5,
                        borderColor: Colors.greyBorder
                    }}>
                        <View style={{ flexDirection: "row", alignContent: 'center', alignItems: "center" }}>
                            <Image
                                source={require('../assets/images/User.png')}
                            />
                            <Text style={{
                                marginLeft: 5,
                                color: Colors.textBlack,
                                fontSize: 14,
                                fontWeight: "500",
                                fontFamily: 'Poppins-Regular'
                            }}>{review.name}</Text>
                        </View>
                        <Text style={{
                            marginTop: 20,
                            color: Colors.textBlack,
                            fontSize: 14,
                            fontWeight: "500",
                            fontFamily: 'Poppins-Regular'
                        }}>{review.comment}</Text>
                        <View style={{ flexDirection: "row", alignContent: 'center', alignItems: "center", marginTop: 15 }}>
                            <Ionicons name="star" size={14} color={Colors.red} />
                            <Text style={{ marginLeft: 5, fontWeight: "400", fontFamily: "Poppins-Regular", fontSize: 15, color: Colors.textGrey }}>{review.rating}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={{marginTop: 20}}>
                <Button title="Show All Reviews" />
            </View>
        </View>
    )
}

export default Reviews;
