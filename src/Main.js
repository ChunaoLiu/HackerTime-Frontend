import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, Linking, Image} from "react-native";
const Main = () => {
const styles = StyleSheet.create({
    image: {
      flex: 1,
      height: undefined,
      width: undefined
    },
    titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16,
      marginLeft: 390
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "#000000"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },

    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },

    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32,
        fontWeight: "300"
    },
    descContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    }
    
  });


    return (
    <SafeAreaView>
        <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36, color: '#B92126'}]}>Will</Text>
            <Text style={[styles.text, { fontSize: 20, fontWeight: "300"}]}>It is really good</Text>
        </View>
    </SafeAreaView>
    );
};

export default Main;