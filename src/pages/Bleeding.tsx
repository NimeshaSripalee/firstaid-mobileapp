import { View, Text } from 'react-native';
import React from 'react';

const Bleeding = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                1. Stay Calm and Safe: Wear gloves if available to avoid infection.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                2. Apply Pressure: Use a clean cloth or bandage to press firmly on the wound.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                3. Elevate: Raise the injured area above the heart, if possible, to slow bleeding.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                4. Secure Dressing: Wrap the wound with a bandage to maintain pressure.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                5. Avoid Peeking: Don’t remove the dressing if it gets soaked—add more layers instead.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                6. Seek Help: Call emergency services if bleeding is severe or doesn’t stop.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 10 }}>
                7. Treat for Shock: Keep the person warm and lying down until help arrives.
            </Text>
        </View>
    );
}

export default Bleeding;
