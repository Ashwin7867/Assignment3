import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Offer = (props) => {
    const {type} = props;
    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <Text style={styles.heading}>{'₹399'}</Text>
                <TouchableOpacity style={styles.selectButton}>
                    <Text style={styles.select}>Select</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.line2}>
                <Text style={styles.validity}>Validity : 365 Days</Text>
                {type==="popular" && <Text style={[styles.validity,{marginLeft : 22}]}>Data : 1.5GB/Day</Text>}
            </View>
            
            <Text style={styles.line3}>{'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days'}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container : {
        marginTop : 15,
        borderBottomWidth : 1,
        borderBottomColor : "#979797",
        paddingBottom : 10
    },
    line1 : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    heading : {
        fontSize : 18,
        fontWeight : '500',
        lineHeight : 28,
        // fontFamily : "Montserrat-Regular",
    },
    selectButton : {
        height : hp("3.1%"),
        width : wp("20%"),
        borderRadius : 12,
        borderWidth : 1,
        borderColor : '#F1800D',
        alignItems : 'center',
        justifyContent : 'center',
        marginRight : 10
    },
    select :{
        fontSize : 12,
        fontWeight : '400',
        color : '#F1800D'
    },
    line2 : {
        flexDirection : "row"
    },
    validity : {
        fontSize : 12,
        fontWeight : '600',
        color :'#263238B2',
        marginTop : 8,
    },
    line3 : {
        fontSize : 12,
        fontWeight : '300',
        color : '#263238B2',
        lineHeight : 18,
        marginTop : 8
    }
})

export default Offer;