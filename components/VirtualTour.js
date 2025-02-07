import React from 'react';
import { Image, Text, View } from 'react-native';
import { Colors } from '../constants/colors';
import Button from './Button';

const VirtualTour = () => {

    return (
        <View>
            <Text style={{ color: Colors.textBlack, fontSize: 17, fontWeight: "500", fontFamily: 'Poppins-Regular' }}>Virtual Tour</Text>
            <Text style={{ color: Colors.textGrey, fontSize: 12, fontWeight: "500", fontFamily: 'Poppins-Regular', marginBottom: 5 }}>Walkthrough our virtual gym </Text>
            <View style={{paddingVertical: 10}}>
                <Image
                    source={require('../assets/images/Gym.png')}
                    style={{
                        width: "100%",
                        borderRadius: 5,
                        height: 235
                    }}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Take Virtual Tour" />
            </View>
        </View>
    )
}

export default VirtualTour;
