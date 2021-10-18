import React from "react";
import { ScrollView, StyleSheet} from "react-native";
import Offer from "./Offer";

const PopularList = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Offer type="popular"/>
            <Offer type="popular"/>
            <Offer type="popular"/>
            <Offer type="popular"/>
            <Offer type="popular"/>
            <Offer type="popular"/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})

export default PopularList