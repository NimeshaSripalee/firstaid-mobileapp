import { View, Text } from 'react-native';
import React from 'react';

const Drowning = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                1. Call emergency services immediately for professional help.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                2. Do not enter the water unless it is safe to do so and you are trained in rescue techniques.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                3. Use a stick, rope, or flotation device to help pull the person to safety.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                4. Once the person is out of the water, check for breathing and responsiveness.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                5. If they are not breathing, begin CPR immediately if you are trained.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                6. If they are breathing, place them on their side in the recovery position.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                7. Keep the person warm and stay with them until medical help arrives.
            </Text>
        </View>
    );
}

export default Drowning;
