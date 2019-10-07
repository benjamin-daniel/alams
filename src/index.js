import React from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Header from "./Components/Header";
import { colors, theme } from "./Constants";
import Avatar from "./Components/Avatar";
import moment from "moment";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import Task from "./Components/Tasks";
import { isEven } from './Utils'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Header
        right={
          <Avatar circular src={require("../assets/profile.jpg")} radius={18} />
        }
      />
      <View style={styles.body}>
      <View>
        <Text style={([theme.h3], { color: "#8096ab", fontSize: 28 })}>Good Afternoon,</Text>
        <Text style={([theme.h4light], { color: "#4fadfc", fontSize: 20 })}>Ritchey</Text>
      </View>

        <View style={{ marginVertical: 20, }}>
          <View style={styles.time}>
            <Text style={{ fontSize: 40 }}>{moment().format('LT').split(' ')[0]}</Text>
            <Text style={{}}>{moment().format('A')}</Text>

          </View>
          <View>
            <Text style={{ textAlign: 'right' }}>{moment().format('ddd, D MMMM')}</Text>
          </View>
        </View>
        <View style={styles.subheader}>
          <Text style={([theme.h4, { textTransform: 'capitalize', color: '#6E889F' }])}>Task lists</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("New")} style={styles.plus}>
            <AntDesign name="plus" size={24} color='white' />
          </TouchableOpacity>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width: '100%', padding: 20 }}>
          {Array(2).fill(0).map((value, index) => (
            <Task key={value} even={isEven(index)} {...props} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brandPrimary
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
  }
});
