import { View, Text } from 'react-native';
import React from 'react';

const Burn = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                1. Cool the burn by running cool (not cold) water over it for 10-20 minutes.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                2. Remove any tight clothing or jewelry near the burn, unless it is stuck.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                3. Cover the burn with a sterile, non-stick dressing or clean cloth.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                4. Avoid using creams, oils, or home remedies on the burn.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                5. Do not break blisters, as this increases the risk of infection.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                6. Seek medical attention for severe burns, burns on the face, hands, or genitals, or if the burn is larger than 3 inches.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                7. Keep the person hydrated and monitor for signs of shock.
            </Text>
        </View>
    );
}

export default Burn;
