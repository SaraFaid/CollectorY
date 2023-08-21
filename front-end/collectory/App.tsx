import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import colors from './components/styling/colors';
import MainHome from './screens/MainHome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList = {
  SignUp: undefined;
  LogIn: undefined;
  MainHome: undefined;
};

export default function App() {


  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTintColor: colors.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
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
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

