import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import Button from './Button';

const Transformations = () => {
    return (
        <View>
            <Text style={styles.title}>Client Transformations</Text>
            <Text style={styles.subtitle}>From these non-traditional approaches, I know how to sync the body with the power</Text>
            <View style={styles.gridContainer}>
                <View style={styles.smallImages}>
                    <Image
                        source={require('../assets/images/Javlin.png')}
                        style={styles.smallImage}
                    />
                    <Image
                        source={require('../assets/images/Mask.png')}
                        style={styles.smallImage}
                    />
                </View>
                <View style={styles.largeImageContainer}>
                    <Image
                        source={require('../assets/images/Situp.png')}
                        style={styles.largeImage}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="See all transformations" />
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
        marginTop: 20
    },
    gridContainer: {
        flexDirection: 'row', 
        marginTop: 10,
    },
    smallImages: {
        flexDirection: 'column', 
        marginRight: 10, 
    },
    smallImage: {
        width: 100,
        height: 110,
        borderRadius: 10,
        marginBottom: 10, 
    },
    largeImageContainer: {
        flex: 1, 
    },
    largeImage: {
        width: '100%',
        height: 230,
        borderRadius: 10,
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default Transformations;
