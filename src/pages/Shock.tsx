import { View, Text } from 'react-native';
import React from 'react';

const Shock = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                1. Call emergency services immediately for medical help.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                2. Lay the person flat on their back to improve blood flow.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                3. Elevate their legs about 12 inches, unless you suspect a spinal injury.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                4. Keep them warm and comfortable by covering them with a blanket.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                5. Do not give them anything to eat or drink.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                6. Monitor their breathing and pulse until help arrives.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                7. If they are unconscious and not breathing, begin CPR if you are trained.
            </Text>
        </View>
    );
}

export default Shock;
