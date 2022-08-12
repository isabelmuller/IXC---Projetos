import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'
import Menu from './screens/Menu'
import commonStyles from './commonStyles'

const menuConfig = {
    initialRouteName: 'Today',
    contentComponent: Menu,
    contentOptions: {
        labelStyle: {
            fontFamily: commonStyles.fontFamily,
            fontWeight: 'normal',
            fontSize: '20'
        },
        activeLabelStyle: {
            color:'#080',
            fontWeight: 'bold'
        }
    }
}

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
//     Today: {
//         name: 'Today',
//         screen: props => <TaskList title='Hoje' daysAhead={0} {...props} />,
//         navigationOptions: {
//             title: 'Hoje'
//         }
//     },
//     Tomorrow: {
//         name: 'Tomorrow',
//         screen: props => <TaskList title='Amanhã' daysAhead={1} {...props} />,
//         navigationOptions: {
//             title: 'Amanhã'
//         }
//     },
//     Week: {
//         name: 'Week',
//         screen: props => <TaskList title='Semana' daysAhead={7} {...props} />,
//         navigationOptions: {
//             title: 'Semana'
//         }
//     },
//     Month: {
//         name: 'Month',
//         screen: props => <TaskList title='Mês' daysAhead={30} {...props} />,
//         navigationOptions: {
//             title: 'Mês'
//         }
//     },
// })

export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Today" component={TelaA} />
                    <Drawer.Screen name="TelaB" component={TelaB} />
                    <Drawer.Screen name="TelaC" component={TelaC} />
                    <Drawer.Screen name="TelaD" component={TelaD} />
                </Drawer.Navigator>
                <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Auth' component={Auth} />
                    <Stack.Screen name='Home' component={TaskList}/>                
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}