import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';  
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const HomeScreen = require("./screens/HomeScreen");
const DetailsScreen = require("./screens/DetailsScreen");

const Menu = createDrawerNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Menu.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:"gray"
          }
        }}
      >
        <Menu.Screen name="Inicio" component={HomeScreen}/>
        <Menu.Screen name="Detalle" component={DetailsScreen}/>
      </Menu.Navigator>
    </NavigationContainer>

  );
};