import { View, Button, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { red } from 'ansi-colors';
import Button from '../Button'
class Timer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName="play-circle" />
                    <Button iconName="stop-circle" />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    time: {
        color: "white",

        fontSize: 120,
        fontWeight: '300'
    }
});
export default Timer;