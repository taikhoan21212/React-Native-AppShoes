import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, Modal} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Sysmodal({message,visible, onHide}) {
  return (
    <Modal visible={visible} transparent={true}>
        <View style={{
            flex:1,
            backgroundColor: 'rgba(00,00,00,.5)',
            justifyContent: 'center',
            alignItems:'center',
            padding: 20
        }}>

            {/* Header */}
            <View style={{
                width: '100%',
                padding: 20,
                backgroundColor: 'while',
                borderRadius: 10
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'black'
                }}>Modal</Text>
            </View>

            {/* Body */}
            <View>
                <Text>{message}</Text>
            </View>

            {/* Footer */}
            <View style={{marginTop: 20,}}>
                <TouchableOpacity onPress={onHide}>
                    <LinearGradient
                      style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: COLORS.blue
                    }}>
                        <Text>Clone</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default Sysmodal