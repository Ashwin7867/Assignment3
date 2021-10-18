import React from "react";
import { View, TouchableOpacity, TextInput, StyleSheet, Text,SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated from "react-native-reanimated"
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import BestOfferList from "../../components/Dashboard/BestOfferList";
import PopularList from "../../components/Dashboard/PopularList";

const Tab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: "row" ,height : 50,width : 300}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
  
          const inputRange = state.routes.map((_, i) => i);
        //   const opacity = Animated?.interpolate(position, {
        //     inputRange,
        //     outputRange: inputRange.map((i) => (i === index ? 1 : 0.5)),
        //   });
  
          return (
            <TouchableOpacity
              // key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                height: 45,
                paddingTop: 15,
                marginRight : 20
              }}
            >
              <Animated.Text
                numberOfLines={1}
                style={[styles.tab_label_style, { opacity : isFocused? 1 : 0.5 }]}
              >
                {label}
              </Animated.Text>
              {isFocused && (
                <View style={styles.linestyle} ></View>
              )}
              {/* <Animated.Text style={isFocused ? styles.tab_label_style : [styles.tab_label_style, { opacity: 0.5 }]}>{label}</Animated.Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <Text style={styles.heading1}>Browse Plans</Text>
                <TouchableOpacity style={styles.crossIcon}>
                    <Text style={{ color: 'white' }}>X</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.line2}>for Airtel Kolkata</Text>
            <View style={styles.line3}>
                <TextInput style={styles.textInput}
                    placeholder="Search Plan Amount, Talktime" />
                <Icon style={styles.searchIcon}
                    name="search1"
                    color="#26323880"
                    size={20} />
            </View>
            {/* <Offer /> */}
            <SafeAreaView style={{flex:1, marginTop : 20}}>
                <Tab.Navigator initialRouteName="BestOfferList"
                     tabBar={(props) => <MyTabBar {...props} />}>
                    <Tab.Screen name="BestOfferList"
                         component={BestOfferList}
                        options={{tabBarLabel:"Best Offer List"}} />
                    <Tab.Screen name="PopularList" 
                        component={PopularList}
                        options={{tabBarLabel: "Popular List"}} />
                    <Tab.Screen name="Special Recharge"
                         component={BestOfferList}
                         options={{tabBarLabel:"Special Recharge"}} />
                    <Tab.Screen name="Top Up" 
                        component={BestOfferList} 
                        options={{tabBarLabel: "Top Up"}}/>
                </Tab.Navigator>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex :1,
        marginTop: 18,
        marginLeft: wp("9.4%"),
        marginRight: wp("7%")
    },
    line1: {
        flexDirection: "row",
        height: hp("4%"),
        width: wp("83%"),
        justifyContent: 'space-between'
    },
    heading1: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "600",
        fontSize: 18,
        color: "#F1800D"
    },
    crossIcon: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: "#263238",
        alignItems: 'center',
        justifyContent: 'center'
    },
    line2: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "600",
        fontSize: 16,
        color: "#263238B2",
    },
    line3: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "#2632381A",
    },
    textInput: {
        fontSize: 14,
        color: "#26323866"
    },
    tab_label_style: {
        fontSize: 13,
        fontWeight : "normal",
        lineHeight : 18
      },
      linestyle: {
        height: 1,
        borderColor: "#F1800D",
        borderWidth: 1,
        borderRadius : 1,
        opacity : 0.6
      },
})