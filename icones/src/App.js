import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { NavigationContainer } from '@react-navigation/native'
import { Button } from '@rneui/themed'
import { Icon } from "@rneui/themed"

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions} >
                <Stack.Screen name="UserList" component={UserList} 
                    options={({ navigation }) => { return { title: "Lista de Usuários",
                    headerRight: () => (
                        <Button 
                            onPress={() => navigation.navigate("UserForm")}
                            type="clear" icon={<Icon name="add" size={25} color="#FFFFFF" />}
                        />
                    )
                }
            }}/>
                <Stack.Screen name="UserForm" component={UserForm}
                    options={{ title: "Formulário de Usuários" }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#207ABF'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}