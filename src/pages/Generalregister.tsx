import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Welcome from '../components/welcome';
import { users } from "../utils/data";
import { registerGeneralUser } from '../api';
import Styles from '../../styles/main'

function RegisterUser({ navigation }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState("");
    const [registerLoading, setRegisterLoading] = useState(false);

    function onUsernameChanged(changedUsername) {
        setUsername(changedUsername);
    }

    function onEmailChanged(changedEmail) {
        setEmail(changedEmail);
    }

    function onPasswordChanged(changedPassword) {
        setPassword(changedPassword);
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return re.test(password);
    }

    function onClickRegister() {
        console.log("Registering ");
        setRegisterError("")
        if (!username) {
            setRegisterError("Username is required");
            return;
        }

        if (username.length < 6) {
            setRegisterError("Username must be at least 6 characters");
            return;
        }

        if (users.some(user => user.username === username)) {
            setRegisterError("Username already exists");
            return;
        }

        if (!email) {
            setRegisterError("Email is required");
            return;
        }

        if (!validateEmail(email)) {
            setRegisterError("Invalid email address");
            return;
        }

        if (users.some(user => user.email === email)) {
            setRegisterError("Email already exists");
            return;
        }

        if (!password) {
            setRegisterError("Password is required");
            return;
        }

        if (!validatePassword(password)) {
            setRegisterError("Password must be at least 6 characters, and include upper and lower case letters and numbers");
            return;
        }

        console.log("Calling the API")
        setRegisterLoading(true)
        registerGeneralUser(username, email, password).then((response)=>{
            console.log("response recieve", response.status)
            if(response.status == 400){
                // Display an error message
                setRegisterError("All fields are required.")
            }else if(response.status >=  200 && response.status < 300){
                navigation.navigate("Home");
            }else if(response.status >= 500){
                setRegisterError("User name already exists. Try another.")
            }
            // response.json().then(console.log)
        }).catch(e=>{
            console.log(e)
            setRegisterError("Something went wrong. Please try again later.")
        }).finally(()=>{
            console.log("Finaling")
            setRegisterLoading(false)
        })
 
    }

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <ScrollView>
            <Text style={Styles.baseText} >
                Hello testG
            </Text>
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <Welcome />
                <Text style={{
                    color: '#D21E5F',
                    fontSize: 50,
                    marginTop: 50,
                    marginLeft: 20
                }}>General User </Text>
                <TextInput
                    style={{
                        backgroundColor: '#FFFFC6',
                        color: '#000',
                        width: 390,
                        height: 50,
                        marginTop: 30,
                        borderRadius: 20,
                        paddingLeft: 10,
                        marginLeft: 20
                    }}
                    onChangeText={onUsernameChanged}
                    placeholder='Username'
                    placeholderTextColor={'#444'}
                    value={username}
                />

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
                    onChangeText={onEmailChanged}
                    placeholder='Email Address'
                    placeholderTextColor={'#444'}
                    value={email}
                />

                <View style={{ position: 'relative', marginLeft: 20, marginTop: 50 }}>
                    <TextInput
                        style={{
                            backgroundColor: '#FFFFC6',
                            color: '#000',
                            width: 390,
                            height: 50,
                            borderRadius: 20,
                            paddingLeft: 10,
                            paddingRight: 50,  // make space for the button
                        }}
                        onChangeText={onPasswordChanged}
                        placeholder='Password'
                        placeholderTextColor={'#444'}
                        secureTextEntry={!showPassword}
                        value={password}
                    />
                    <TouchableOpacity 
                        onPress={toggleShowPassword} 
                        style={{
                            position: 'absolute',
                            right: 25,
                            top: 15,
                        }}
                    >
                        <Text style={{ color: '#D21E5F', fontSize: 18 }}>
                            {showPassword ? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity>
                </View>

                {registerError ? <Text style={{ color: "red", marginLeft: 20 }}>{registerError}</Text> : null}

                <TouchableOpacity disabled={registerLoading} style={{ marginLeft: 80, marginRight: 80 }} onPress={onClickRegister}>
                    <Text style={{
                        backgroundColor: registerLoading ? '#331E11' : '#D21E5F',
                        color: 'white',
                        fontSize: 50,
                        alignItems: 'center',
                        borderRadius: 40,
                        paddingLeft: 30,
                        marginTop: 70,
                    }}> Register</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: 'white', height: 70 }} />
            </View>
        </ScrollView>
    );
}

export default RegisterUser;
