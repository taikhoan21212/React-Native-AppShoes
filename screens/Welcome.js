import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = ({ navigation }) => {

    return (
        <SafeAreaView style={{
            flex: 1
        }}
            colors={[COLORS.white, COLORS.black]}>
            <LinearGradient
                style={{
                    flex: 1
                }}
                colors={[COLORS.white, COLORS.black]}
            >
                <View style={{ flex: 1, marginTop: 20 }}>
                    <View>
                        <Image
                            source={require("../assets/shoes1.jpg")}
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 20,
                                position: "absolute",
                                top: 10,
                                transform: [
                                    { translateX: 20 },
                                    { translateY: 50 },
                                    { rotate: "-15deg" }
                                ]
                            }}
                        />

                        <Image
                            source={require("../assets/shoes3.jpg")}
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 20,
                                position: "absolute",
                                top: -30,
                                left: 100,
                                transform: [
                                    { translateX: 50 },
                                    { translateY: 50 },
                                    { rotate: "-5deg" }
                                ]
                            }}
                        />

                        <Image
                            source={require("../assets/shoes2.jpg")}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 20,
                                position: "absolute",
                                top: 130,
                                left: -50,
                                transform: [
                                    { translateX: 50 },
                                    { translateY: 50 },
                                    { rotate: "15deg" }
                                ]
                            }}
                        />

                        <Image
                            source={require("../assets/shoes4.jpg")}
                            style={{
                                height: 200,
                                width: 200,
                                borderRadius: 20,
                                position: "absolute",
                                top: 110,
                                left: 100,
                                transform: [
                                    { translateX: 50 },
                                    { translateY: 50 },
                                    { rotate: "-15deg" }
                                ]
                            }}
                        />
                    </View>

                    {/* content  */}

                    <View style={{
                        paddingHorizontal: 22,
                        position: "absolute",
                        top: 400,
                        width: "100%"
                    }}>
                        <Text style={{
                            fontSize: 50,
                            fontWeight: 800,
                            color: COLORS.black
                        }}>Let's Get</Text>
                        <Text style={{
                            fontSize: 46,
                            fontWeight: 800,
                            color: COLORS.black
                        }}>Started</Text>

                        <View style={{ marginVertical: 22 }}>
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                                marginVertical: 4
                            }}>Enjoy shopping with us,</Text>
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white,
                            }}>Don't worry about price and quality</Text>
                        </View>

                        <Button
                            title="Join Now"
                            onPress={() => navigation.navigate("Login")}
                            style={{
                                marginTop: 22,
                                width: "100%"

                            }}
                        />

                        <View style={{
                            flexDirection: "row",
                            marginTop: 12,
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.white
                            }}>Already have an account ?</Text>
                            <Pressable
                                onPress={() => navigation.navigate("Signup")}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: COLORS.white,
                                    fontWeight: "bold",
                                    marginLeft: 4
                                }}>Register</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </LinearGradient>

        </SafeAreaView>
    )
}

export default Welcome