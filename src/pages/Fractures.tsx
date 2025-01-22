import { View, Text } from 'react-native';
import React from 'react';

const Fractures = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                1. Keep the injured area as still as possible to prevent further damage.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                2. Call emergency services if the fracture is severe or if you suspect a spinal injury.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                3. Support the injured limb with a splint or sling, if available.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                4. Apply ice packs wrapped in a cloth to reduce swelling.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                5. Avoid straightening or moving the broken bone.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                6. Treat for shock by keeping the person warm and comfortable.
            </Text>
            <Text style={{ fontSize: 30, color: 'black', marginBottom: 15 }}>
                7. Wait for medical professionals to provide further assistance.
            </Text>
        </View>
    );
}

export default Fractures;
