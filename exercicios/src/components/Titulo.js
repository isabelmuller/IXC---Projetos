import React, { Fragment } from "react";
import { View, Text } from "react-native";
import Estilo from "./estilo"

export default props =>(
    <Fragment>
        <Text style={Estilo.ex}>{props.principal}</Text>
        <Text>{props.segundario}</Text>
    </Fragment>

    )