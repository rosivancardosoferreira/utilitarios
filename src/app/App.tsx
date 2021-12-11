import React from "react";

//ROUTES
import Screens from "../infra/screens";

import { ThemeProvider } from "styled-components/native";
import { light } from "./../styles/themes/light";


export default function App(){
    return (
        <ThemeProvider theme={ light }>
            <Screens /> 
        </ThemeProvider>
    ) 
}