

import React from 'react';
import { Image, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import Button from './Button';
import Inbox from "../assets/svgs/inbox.svg"
import Direction from "../assets/svgs/direction.svg"

const Location = () => {

    return (
        <View>
            <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular', marginBottom: 2 }}>Location</Text>
            <Text style={{ color: Colors.regularBlack, fontSize: 15, fontWeight: "500", fontFamily: 'Poppins-Regular', marginBottom: 5 }}>Address Here</Text>
            <View style={{paddingVertical: 10, marginTop: 10}}>
                <Image
                    source={require('../assets/images/Map.png')}
                    style={{
                        width: "100%",
                        height: 150
                    }}
                />
            </View>
            <View style={{ marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                <Button title="Get Directions" icon={<Direction />}/>
                <Button title="Contact Us" icon={<Inbox />}/>
            </View>
        </View>
    )
}

export default Location;
