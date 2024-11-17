import React from 'react';
import { Button, Text, View } from 'react-native';
import BottomNavBar from './src/components/bottomnav';
import Learn from './src/pages/Learn';
import Notify from './src/pages/Notify';
import Feedback2 from './src/pages/feedbacktwo';
import RegisterEmergency from './src/pages/Emergencyregister';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import RegAs from './src/pages/regAs';
import Selectbot from './src/pages/selectOptionBOT';
import Bleeding from './src/pages/Bleeding';
import Fainting from './src/pages/Fainting';
import Shock from './src/pages/Shock';
import Fractures from './src/pages/Fractures';
import Burn from './src/pages/Burn';
import Drowning from './src/pages/Drowning';
import Report from './src/pages/FirstAidReport';
import RegisterUser from "./src/pages/Generalregister";
import Feedback from './src/pages/feedbacktwo';
import LoginEmergency from './src/pages/Log as emergency';
import Logout from './src/pages/Log out';
import ChatBot from './src/pages/chatbbot';
import { AuthProvider } from './src/ctx/AuthContext';



const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
    return (
        <AuthProvider>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />


                <Stack.Screen
                    name="Register As"
                    component={RegAs}
                    options={{
                        headerShown: false
                    }}
                />


                <Stack.Screen
                    name="Register Emergency"
                    component={RegisterEmergency}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Option selection"
                    component={Selectbot}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Notification"
                    component={Notify}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Learn first aid"
                    component={Learn}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Bleed"
                    component={Bleeding}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Faint"
                    component={Fainting}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Shocking"
                    component={Shock}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Fract"
                    component={Fractures}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Burning"
                    component={Burn}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Drown"
                    component={Drowning}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="FirstaidReport"
                    component={Report}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Give feedback"
                    component={Feedback}
                    options={{
                        headerShown: false
                    }}
                />


                <Stack.Screen
                    name="Register User"
                    component={RegisterUser}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Log out"
                    component={Logout}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Chatbot"
                    component={ChatBot}
                    options={{
                        headerShown: false
                    }}
                />



            </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>

    );
}


export default App;
