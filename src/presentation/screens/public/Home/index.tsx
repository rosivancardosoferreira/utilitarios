import React from "react";
import { Button, Text, View } from "react-native";

import {iNavigation} from "../../../../data/protocols/iNavigation";

export default function Home({ navigation } : iNavigation) {
    return (
        <View>
            <Text style={{color: "red"}}>Ferreira</Text>
            <Button
                title="Voltar"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}