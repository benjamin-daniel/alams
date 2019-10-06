import React from "react";
import { StyleSheet, Text, View } from "react-native";
import App from './src'
import { createAppContainer, statck } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import New from "./src/New";
import Edit from "./src/Edit";

export default createAppContainer(
    createStackNavigator({
        Home: App,
        New,
        Edit,
    }, { headerMode: 'none' })
)