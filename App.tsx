import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import ServicesList from './component/ServicesList';
import ACSubservices from './component/ACSubservices'; 
import { RootStackParamList } from './types'; // 
import MassageSubservices from './component/MassageSubservices';
import SpaSubservices from './component/SpaSubservices';
import HomeCleanSubservices from './component/HomeCleanSubservices';
import ElectricianSubservices from './component/ElectricianSubservices';
import PlumberSubservices from './component/PlumberSubservices';
import BeauticianSubservices from './component/BeauticianSubservices';
import ChatBotScreen from './component/ChatBotScreen';
import ChatScreen from './component/ChatScreen';


const Stack = createStackNavigator<RootStackParamList>(); 
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Services" component={ServicesList} />
        <Stack.Screen name="ACSubservices" component={ACSubservices} /> 
        <Stack.Screen name="MassageSubservices" component={MassageSubservices} />
        <Stack.Screen name="SpaSubservices" component={SpaSubservices} />
        <Stack.Screen name="HomeCleanSubservices" component={HomeCleanSubservices} />
        <Stack.Screen name="ElectricianSubservices" component={ElectricianSubservices} />
        <Stack.Screen name="PlumberSubservices" component={PlumberSubservices} />
        <Stack.Screen name="BeauticianSubservices" component={BeauticianSubservices} />
        
        <Stack.Screen name="ChatBot" component={ChatBotScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
          
  


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
