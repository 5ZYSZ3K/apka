import React from 'react';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from '@app/features/contact';
import HomeScreen from '@app/features/home';
import InstructionsScreen from '@app/features/instructions';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<{
  home: undefined;
  contact: undefined;
  instructions: undefined;
}>();

export const NativeNavigation: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="contact"
        component={ContactScreen}
        options={{
          title: 'Contact',
        }}
      />
      <Drawer.Screen
        name="instructions"
        component={InstructionsScreen}
        options={{
          title: 'Instructions',
        }}
      />
    </Drawer.Navigator>
  );
};
