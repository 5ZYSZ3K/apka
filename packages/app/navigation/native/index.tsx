import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from 'app/features/contact';
import HomeScreen from 'app/features/home';
import InstructionsScreen from 'app/features/instructions';

const Stack = createNativeStackNavigator<{
  home: undefined;
  contact: undefined;
  instructions: undefined;
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="contact"
        component={ContactScreen}
        options={{
          title: 'Contact',
        }}
      />
      <Stack.Screen
        name="instructions"
        component={InstructionsScreen}
        options={{
          title: 'Instructions',
        }}
      />
    </Stack.Navigator>
  );
}
