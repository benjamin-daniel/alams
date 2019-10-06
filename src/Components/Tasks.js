import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, theme } from '../Constants';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const DummmyData = [
    { id: 1, text: 'Call Daddy by 10 am', status: 'active' },
    { id: 2, text: 'Use Figma', status: 'completed' }
]

const Task = (props) => {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("New")} style={styles.body}>
            <View style={styles.header}>
                <Text style={{ color: colors.text, ...theme.h3 }}>Today</Text>
                <AntDesign name="plus" size={24} color='#37A0FE' />
            </View>
            <View style={styles.task}>
                <View style={{ marginRight: 10 }}>
                    <MaterialIcons name="check-box-outline-blank" size={24} color='#37A0FE' />
                </View>
                <Text>Call Daddy by 10 am</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.brandPrimary,
        borderRadius: 10,
        width: '90%',
        maxWidth: 400,
        marginRight: 45,
        padding: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})