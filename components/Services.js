

import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import Button from './Button';

const Services = () => {

    const ROW_ITEMS = ["Spa", "Courts", "Yoga", "Boxing"];


    return (
        <View>
            <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular',marginBottom: 5 }}>Our Services</Text>
            <View style={{
                flexDirection: "row",
                marginVertical: 10,
            }}>
                {ROW_ITEMS.map((item, index) => (
                    <View key={index} style={{
                        paddingVertical: 8,
                        paddingHorizontal: 15,
                        backgroundColor: Colors.lightGray,
                        borderRadius: 0,
                        marginRight: 10,
                    }}>
                        <Text style={{fontWeight: "500", fontSize: 12, color: Colors.textGrey}}>{item}</Text>
                    </View>
                ))}
            </View>
            <View style={{marginTop: 10}}>
                <Button title="Show All Services" />
            </View>
        </View>
    )
}

export default Services;
