import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, theme } from './Constants';
import { AntDesign, MaterialIcons, Ionicons, } from '@expo/vector-icons';
import Header, { getStatusBarHeight } from './Components/Header'
import Avatar from './Components/Avatar'


const New = ({ }) => {
    return (
        <View style={styles.container}>
            <Header
                right={
                    <Avatar circular src={require("../assets/profile.jpg")} radius={18} />
                }
                left={
                    <Ionicons name="ios-arrow-back" size={24} color='#37A0FE' />
                }
                backgroundColor='#BAD1E2'
            />
            <View style={{ height: 20, backgroundColor: '#BAD1E2' }} />
            <View style={styles.main}>
                <View style={{ borderTopRightRadius: 10, marginTop: -20 }}>
                    <View style={styles.header}>
                        <Text style={{ color: colors.text, ...theme.h3 }}>Today</Text>
                        <AntDesign name="plus" size={24} color='#37A0FE' />
                    </View>
                </View>

            </View>
        </View>
    )
}

export default New;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.brandPrimary,
        // paddingHorizontal: 20,
        // alignItems: "center"
        // justifyContent: "center"
    },
    body: {
        padding: 20
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "flex-end"
    },
    subheader: {
        ...theme.h3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    plus: {
        backgroundColor: '#FE5466',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    main: {
        backgroundColor: 'white'
    }
});
