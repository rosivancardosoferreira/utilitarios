import React from "react";
import { Button, Text, View } from "react-native";
//INTERFACE
import {iNavigation} from "../../../../data/protocols/iNavigation";

export default function Login({ navigation } : iNavigation) {
    return (
        <View>
            <Text style={{color: "red"}}>Rosivan</Text>
            <Button
                title="Proximo"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}