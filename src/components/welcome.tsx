import { View, Text, Pressable, Button, Image } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#FFFFC6', borderBottomLeftRadius: 185, borderBottomRightRadius: 185 }}>
      <Text style={{ fontSize: 80, fontWeight: 900,  color: '#8C05D3' }}>Welcome</Text>
      <Text style={{ fontSize: 30, fontWeight: 900, color: '#C56EFF' }}>To</Text>
      <Text style={{ fontSize: 30, fontWeight: 900, color: '#C56EFF' }}>Virtual First Aid Adviser</Text>

      <Image style={{
        width: 150,
        height: 150,

        marginTop: 10
      }} source={require('../../assets/images/Logo.png')}

      />
    </View>
  )
}

export default Welcome