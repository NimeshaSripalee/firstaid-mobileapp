import React, { useState } from 'react';
import { Alert, Button, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Welcome from '../components/welcome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import { users } from '../utils/data';
import { LoginUser } from '../api';

function Login({ navigation }): React.JSX.Element {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [LoginLoading, setLoginLoading] = useState(false);
    const [LoginError, setLoginError] = useState("");

    function onUsernameChanged(changedUsername) {
        setUsername(changedUsername);
    }

    function onPasswordChanged(changedPassword) {
        setPassword(changedPassword);
    }

    function onClickLogin() {
        if (!username) {
            setLoginError("Username is required");
            return;
        }

        if (!password) {
            setLoginError("Password is required");
            return;
        }

        console.log("Calling the API")
        setLoginLoading(true)
        LoginUser(username, password).then((response) => {
            console.log("response recieve", response.status)
            if (response.status == 400) {
                // Display an error message
                setLoginError("All fields are required.")
            } else if (response.status >= 200 && response.status < 300) {
                response.json().then(data => {
                    console.log(data)
                    if (data.user_type == "GeneralPublic") {
                        navigation.navigate("Option selection");
                    } else if (data.user_type == "Ambulance") {
                        navigation.navigate("Notification");
                    }
                }).catch(e => {
                    console.log("Errosr response logge", e)
                })
            } else if (response.status >= 500) {
                setLoginError("User name already exists. Try another.")
            }
            // response.json().then(console.log)
        }).catch(e => {
            console.log(e)
            setLoginError("Something went wrong. Please try again later.")
        }).finally(() => {
            console.log("Finaling")
            setLoginLoading(false)
        })

    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <Welcome />
                <TextInput
                    style={{
                        backgroundColor: '#FFFFC6',
                        color: '#000',
                        width: 390,
                        height: 50,
                        marginTop: 50,
                        borderRadius: 20,
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                    onChangeText={onUsernameChanged}
                    placeholder='Username'
                    placeholderTextColor={'#444'}
                    value={username}
                />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#FFFFC6',
                    width: 390,
                    height: 50,
                    marginTop: 50,
                    borderRadius: 20,
                    paddingLeft: 10,
                    marginLeft: 20,
                }}>
                    <TextInput
                        style={{ flex: 1, color: '#000' }}  // Added color property here
                        onChangeText={onPasswordChanged}
                        placeholder='Password'
                        placeholderTextColor={'#444'}
                        secureTextEntry={!showPassword}
                        value={password}
                    />
                    <TouchableOpacity onPress={toggleShowPassword} style={{ padding: 10 }}>
                        <Text style={{ color: '#D21E5F', fontSize: 18 }}>
                            {showPassword ? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ marginLeft: 80, marginRight: 80 }}
                    onPress={onClickLogin}
                >
                    <Text
                        style={{
                            backgroundColor: '#D21E5F',
                            color: 'white',
                            fontSize: 60,
                            alignItems: 'center',
                            borderRadius: 30,
                            paddingLeft: 50,
                            marginTop: 80
                        }}
                    >
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register As')}>
                    <Text
                        style={{
                            backgroundColor: 'white',
                            color: '#8C05D3',
                            fontSize: 30,
                            alignItems: 'center',
                            marginLeft: 50,
                            marginTop: 80
                        }}
                    >
                        New user? Register first
                    </Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white', height: 100 }} />
            </View>
        </ScrollView>
    );
}

export default Login;
