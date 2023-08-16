import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import colors from './components/colors';
import CollectionHome from './screens/CollectionHome';
import ProfileHome from './screens/ProfileHome';
import SocialHome from './screens/SocialHome';
import CardsHome from './screens/CardsHome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export type RootStackParamList = {
  SignUp: undefined;
  LogIn: undefined;
  SocialHome: undefined;
  CardsHome: undefined;
  CollectionHome: undefined;
  ProfileHome: undefined;
};

export default function App() {


  const Stack = createNativeStackNavigator<RootStackParamList>();

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
        <Stack.Screen name="SocialHome" component={SocialHome}
          options={{
            title: 'CollectorY',
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
          <Stack.Screen name="CardsHome" component={CardsHome}
          options={{
            title: 'Cards',
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
        <Stack.Screen name="CollectionHome" component={CollectionHome}
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
          <Stack.Screen name="ProfileHome" component={ProfileHome}
          options={{
            title: 'Profile',
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

