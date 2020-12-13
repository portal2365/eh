import React from 'react';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';



import WelcomeScreen from './screens/WelcomeScreen';

import { AppDrawerNAvigator } from './components/AppDrawerNavigator'

import { AppTabNAvigator } from './components/AppTabNavigator'



export default function App() {

    return(

        <AppContainer/>

    );

}

const switchNavigation = createSwitchNavigation({

    WelcomeScreen:{screen:WelcomeScreen},

    Drawer:{screen: AppDrawerNavigator},

    BottomTab: {screen: AppTabNavigator},
    
})



const AppContainer = createAppContainer(switchNavigator);