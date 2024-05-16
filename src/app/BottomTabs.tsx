import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PawIcon, ChatIcon, ProfileIcon } from '../common/icons';
import { HomeScreen } from '../home';
import { ChatScreen } from '../chat';
import { ProfileScreen } from '../profile';

const Tab = createBottomTabNavigator();

export type TProps = {};

export const BottomTabs: React.FC<TProps> = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 24,
                        backgroundColor: '#fff',
                        borderRadius: 22,
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        width: 156,
                        height: 44,
                        left: '50%',
                        marginLeft: -86,
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    // @ts-ignore
                    component={HomeScreen}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused }) => (
                            <PawIcon color={focused ? '#EC537E' : '#341414'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={ChatScreen}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused }) => (
                            <ChatIcon color={focused ? '#EC537E' : '#341414'} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: '',
                        tabBarIcon: ({ focused }) => (
                            <ProfileIcon
                                color={focused ? '#EC537E' : '#341414'}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabs;
