import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './components/style';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './components/colors';

export type RootStackParamList = {
  SignUp: undefined;
  LogIn: undefined;
};

export default function App() {


  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.tertiary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{
          title: 'Log In',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.tertiary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

