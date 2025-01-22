import { View, Text } from 'react-native';
import React from 'react';

const Fainting = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                1. Lay the person flat on their back to improve blood flow to the brain.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                2. Elevate their legs slightly above heart level, if possible.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                3. Loosen tight clothing, especially around the neck.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                4. Check for breathing and responsiveness.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                5. If unconscious for more than a minute, call emergency services.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                6. If they regain consciousness, encourage them to rest and avoid sudden movements.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                7. Monitor their condition until medical help arrives, if needed.
            </Text>
        </View>
    );
}

export default Fainting;
