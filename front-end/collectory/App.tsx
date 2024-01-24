import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import colors from './components/styling/colors';
import MainHome from './screens/MainHome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';


export default function App() {


  const Stack = createNativeStackNavigator();
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogIn} options={{
          title: 'Log In',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      <Stack.Screen name="MainHome" component={MainHome}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: colors.dark,
            },
            headerTintColor: colors.light,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackVisible: false,
          }}
          
          /> 
        <Stack.Screen name="SignUp" component={SignUp} initialParams={{user: {} as JSON}} options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

