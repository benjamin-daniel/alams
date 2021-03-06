import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, theme } from './Constants';
import { AntDesign, MaterialIcons, Ionicons, } from '@expo/vector-icons';
import Header, { getStatusBarHeight } from './Components/Header'
import Avatar from './Components/Avatar'
import uuid from 'uuid/v1';


class Edit extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    right={
                        <Avatar circular src={require("../assets/profile.jpg")} radius={18} />
                    }
                    left={
                        <Ionicons name="ios-arrow-back" size={24} color='#37A0FE' />
                    }
                    leftInstruction={() => this.props.navigation.goBack()}
                    backgroundColor='#BAD1E2'
                />
                <View style={{ height: 40, backgroundColor: '#BAD1E2' }} />
                <View style={styles.main}>
                    <View style={{}}>
                        <View style={styles.header}>
                            <Text style={{ color: colors.text, ...theme.h3 }}>Today</Text>
                            <TouchableOpacity>
                                <AntDesign name="plus" size={24} color='#37A0FE' />
                            </TouchableOpacity>
                        </View>
                        {Array(4).fill(0).map((value, index) => (
                            <View style={styles.task}>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    <MaterialIcons name="check-box-outline-blank" size={24} color='#37A0FE' />
                                </TouchableOpacity>
                                <Text>Call Daddy by 10 am</Text>
                            </View>
                        ))}
                        
                    </View>
    
                </View>
            </View>
        )
    }
}

export default Edit;


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
        backgroundColor: 'white',
        position: 'absolute',
        top: 70, 
        borderTopRightRadius: 50,
        height: '100%',
        width: '100%',
        padding: 20,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    }
});
