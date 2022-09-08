import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import Register from "./screens/register";
import DashBoard from './screens/dashboard';
import HarryPotter from './screens/HarryPotter';
import SearchBooks from './screens/search';
import PercyJackson from './screens/PercyJackson';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name=" " component={Home} />
        <Drawer.Screen name="LogIn" component={LogIn} />
        <Drawer.Screen name="SignUp" component={Register} />
        <Drawer.Screen name="DashBoard" component={DashBoard} />
        <Drawer.Screen name="Harry Potter" component={HarryPotter} />
        <Drawer.Screen name="Search books" component={SearchBooks}/>
        <Drawer.Screen name="PercyJackson" component={PercyJackson}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )};
