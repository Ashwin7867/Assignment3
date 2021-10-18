import React from "react";
import { ScrollView, StyleSheet} from "react-native";
import Offer from "./Offer";

const BestOfferList = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Offer type="best offer"/>
            <Offer type="best offer"/>
            <Offer type="best offer"/>
            <Offer type="best offer"/>
            <Offer type="best offer"/>
            <Offer type="best offer"/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column'
    }

})

export default BestOfferList;