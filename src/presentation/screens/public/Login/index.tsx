import React from "react";
import { Button, Text, View } from "react-native";

//INTERFACE
import {iNavigation} from "../../../../data/protocols/iNavigation";

// STYLES
import { Exemple } from "../../../../styles/shared";

export default function Login({ navigation } : iNavigation) {
    return (
        <Exemple>
            <Text style={{color: "red"}}>Rosivan</Text>
            <Button
                title="Proximo"
                onPress={() => navigation.navigate("Home")}
            />
        </Exemple>
    )
}