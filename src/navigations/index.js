import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native'

const AppNavContainer = () => {
    return(
        <NavigationContainer>
            <Text>Hello World</Text>
        </NavigationContainer>
    );
};

// Screens >>> Home >>> Drawer
// Screens >>> Auth
export default AppNavContainer;

