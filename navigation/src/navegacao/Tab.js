import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/EvilIcons'
import TelaA from '../views/TelaA';
import TelaC from '../views/TelaC';
import TelaB from '../views/TelaB';

const Tab = createBottomTabNavigator();

export default props => (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break;
                    case 'TelaC':
                        iconName = focused
                            ? 'ios-list-box'
                            : 'ios-list'
                        break;        
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            } 
        })}
    >
        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
)
