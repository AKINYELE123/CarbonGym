import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";

const Button = ({ title, onPress, icon }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={{flexDirection: "row", gap: 3, alignItems: "center"}}>
            {icon && <View style={styles.icon}>{icon}</View>}
            <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "transparent",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Colors.buttonBorder,
        borderRadius: 4
    },
    icon: {
        marginRight: 8,
    },
    buttonText: {
        color: Colors.textBlack,
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Poppins-Regular",
    },
});

export default Button;
