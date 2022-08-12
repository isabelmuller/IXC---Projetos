import React from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
//import { NavigationContainer } from '@react-navigation/native'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import UserList from './views/UserList'
//import UserForm from './views/UserForm'
import Icon from 'react-native-vector-icons/FontAwesome'
//import { Button, Icon } from 'react-native-elements'
//import { Button } from '@rneui/themed'

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, padding: 16}}>
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        React Native Vector Icons
                    </Text>
                    <View style={styles.iconContainer}>
                        <Icon name="users" size={60} color="#900" />
                    </View>
                    <View style={{marginTop: 16, marginBottom: 16}}>
                        <Icon.Button
                            name="facebook"
                            size={40}
                            backgroundColor="#3b5998"
                            onPress={() => alert('Login com Facebook')}>
                            <Text style={{fontSize: 25, color: 'white' }}>
                                Login com Facebook
                            </Text>
                        </Icon.Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    iconContainer: {
        marginTop: 16,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
})




// const Stack = createNativeStackNavigator()

// export default props => {
//     return (
//         <SafeAreaView style={{flex: 1}}>
//             <NavigationContainer>
//             <View style={{flex: 1, padding: 16}}>
//             <Stack.Navigator initialRouteName='UserList'
//                 screenOptions={screenOptions} >
//                 <Stack.Screen 
//                     name="UserList" 
//                     component={UserList}
//                     options={() => {
//                         return {
//                             title: "Lista de Usuários",
//                             headerRight: () => {
//                                 return (
//                                     <View>
//                                         <Button
//                                             //type="clear"
//                                             Icon={<Icon name="plus" size={25} color="write" />}
//                                         />
//                                     </View>,
//                                     <View>
//                                         <Icon.Button name="plus" size={30} />
//                                     </View>                                
//                                 )
//                             } 
//                         }
//                     }} 
//                 />
//                 <Stack.Screen 
//                     name="UserForm" 
//                     component={UserForm}
//                     options={{
//                         title: "Formulário de Usuários"
//                     }} />
//             </Stack.Navigator>
//             </View>
//         </NavigationContainer>
//         </SafeAreaView>
//     )
// }

// const screenOptions = {
//     headerStyle: {
//         backgroundColor: '#f4511e'
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//         fontWeight: 'bold'
//     }
// }