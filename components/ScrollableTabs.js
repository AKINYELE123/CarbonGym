import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import About from "../assets/svgs/about.svg"
import Class from "../assets/svgs/class.svg"
import Dumbell from "../assets/svgs/dumbell.svg"
import Message from "../assets/svgs/message.svg"
import { Colors } from "../constants/colors";

const TABS = [
    { name: "About Us", icon: <About /> },
    { name: "Specialties", icon: <Dumbell /> },
    { name: "Classes", icon: <Class /> },
    { name: "Reviews", icon: <Message /> },
];

const TAB_CONTENT = {
    "About Us": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et",
    "Classes": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et",
    "Reviews": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et",
    "Specialties": "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et",
};

const ScrollableTabs = () => {
    const [activeTab, setActiveTab] = useState(TABS[0].name);
    const [showFullContent, setShowFullContent] = useState(false);

    const handleTabSwitch = (tabName) => {
        setActiveTab(tabName);
        setShowFullContent(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContainer}>
                {TABS.map((tab) => (
                    <TouchableOpacity key={tab.name} onPress={() => handleTabSwitch(tab.name)} style={styles.tabButton}>
                        {tab.icon}
                        <Text style={[styles.tabText]}>{tab.name}</Text>
                        {activeTab === tab.name && <View style={styles.indicator} />}
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.contentContainer}>
                <Text style={styles.contentTitle}>{activeTab}</Text>
                <Text style={styles.contentText}>
                    {showFullContent ? TAB_CONTENT[activeTab] : TAB_CONTENT[activeTab].substring(0, 200) + "..."}
                </Text>
                <TouchableOpacity onPress={() => setShowFullContent(!showFullContent)}>
                    <Text style={styles.seeMore}>{showFullContent ? "See Less" : "See More"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabContainer: {
        flexDirection: "row",
        paddingBottom: 5,
    },
    tabButton: {
        marginRight: 25,
        alignItems: "center",
        width: 68
    },
    tabText: {
        fontSize: 12,
        color: Colors.regularBlack,
        fontWeight: "500",
        marginTop: 4,
        fontFamily: "Poppins-Regular"
    },
    contentTitle: {
        fontSize: 17,
        marginBottom: 10,
        color: "#000",
        fontWeight: "500",
        fontFamily: "Poppins-Regular"
    },
    indicator: {
        height: 2,
        width: "100%",
        backgroundColor: "black",
        marginTop: 5,
    },
    contentContainer: {
        marginTop: 20,
    },
    contentText: {
        fontSize: 14,
        marginBottom: 5,
        color: "#202020",
        fontWeight: "500",
        fontFamily: "Poppins-Regular"
    },
    seeMore: {
        color: "#000",
        marginTop: 1,
        fontWeight: "500",
        fontSize: 14,
        fontFamily: "Poppins-Regular"
    },
});

export default ScrollableTabs;
