import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo" 

export default function() {
    return <Text style={Estilo.ex}>Comp #Oficial</Text>
}

export function Comp1() {
    return <Text s style={Estilo.ex}tyle={Estilo.ex}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Estilo.ex}>Comp #02</Text>
}

/* export { Comp1, Comp2} 
export default Comp */