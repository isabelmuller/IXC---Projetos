// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { Icon } from 'react-native-vector-icons/EvilIcons'

// import Feed from './screens/Feed'

// const MenuRoutes = {
//     Feed: {
//         name: 'Feed',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Feed',
//             tabBarIcon: ({ tintColor }) =>
//                 <Icon name='' size={30} color={tintColor} />
//         }
//     },

//     Add: {
//         name: 'AddPhoto',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Add Picture',
//             tabBarIcon: ({ tintColor }) =>
//                 <Icon name='' size={30} color={tintColor} />
//         }
//     },
//     Profile: {
//         name: 'Profile',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Profile',
//             tabBarIcon: ({ tintColor: color }) =>
//                 <Icon name='' size={30} color={color} />
//         }
//     }
// }

// const MenuConfig = {
//     initialRouteName: 'Feed',
//     tabBarOptions: {
//         showLabel: false,
//     }
// }

// const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
// export default MenuNavigator

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Icon } from 'react-native-vector-icons/EvilIcons'
// import { NavigationContainer } from '@react-navigation/native';

// import Feed from './screens/Feed'

// const MenuRoutes = {
//     Feed: {
//         name: 'Feed',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Feed',
//             tabBarIcon: ({ tintColor }) =>
//                 <Icon name='' size={30} color={tintColor} />
//         }
//     },

//     Add: {
//         name: 'AddPhoto',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Add Picture',
//             tabBarIcon: ({ tintColor }) =>
//                 <Icon name='' size={30} color={tintColor} />
//         }
//     },
//     Profile: {
//         name: 'Profile',
//         screen: Feed,
//         navigationOptions: {
//             title: 'Profile',
//             tabBarIcon: ({ tintColor: color }) =>
//                 <Icon name='' size={30} color={color} />
//         }
//     }
// }

// const Tab = createBottomTabNavigator();

// export default MenuRoutes => (
//     <NavigationContainer>
//     <Tab.Navigator 
//         screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//                 let iconName

//                 switch (route.name) {
//                     case 'Feed':
//                         iconName = focused
//                             ? 'ios-information-circle'
//                             : 'ios-information-circle-outline'
//                         break;
//                     case 'AddPhoto':
//                         iconName = focused
//                             ? 'ios-information-circle'
//                             : 'ios-information-circle-outline'
//                         break;
//                     case 'Profile':
//                         iconName = focused
//                             ? 'ios-list-box'
//                             : 'ios-list'
//                         break;        
//                 }

//                 return <Ionicons name={iconName} size={size} color={color} />;
//             } 
//         })}
//     >
//         <Tab.Screen name="Feed" component={MenuRoutes.Feed} />
//         <Tab.Screen name="AddPhoto" component={MenuRoutes.Add} />
//         <Tab.Screen name="Profile" component={MenuRoutes.Profile} />
//     </Tab.Navigator>
//     </NavigationContainer>
// )

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-vector-icons/EvilIcons'
import { NavigationContainer } from '@react-navigation/native';

import Feed from './screens/Feed'


const Tab = createBottomTabNavigator();
const Navigator = () => {
    return(
        <NavigationContainer>
     <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        {/* <Tab.Screen name="AddPhoto" component={Add} />
        <Tab.Screen name="Profile" component={Profile} /> */}
        </Tab.Navigator>
     </NavigationContainer>
    )
}
 export default Navigator;       