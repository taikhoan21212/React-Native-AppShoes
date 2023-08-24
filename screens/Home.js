import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, images, SIZES, FONTS } from '../constants'
import { Feather } from "@expo/vector-icons"
import { latestList, photos, shoesList1, shoesList2 } from '../constants/datas'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Constants from 'expo-constants';

const Home = ({ navigation }) => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        console.log(Constants.expoConfig.extra)
        console.log(`${Constants.expoConfig.extra.apiURL}products`)
        // axios.get('https://jsonplaceholder.typicode.com/photos')
            axios.get(`${Constants.expoConfig.extra.apiURL}products`)
            .then((res) => {
                console.log(res)
                setProductList(res.data.slice(0, 20))
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.white,

        }}>
            <View style={{
                marginHorizontal: 22,
                marginTop: 12
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{
                            width: 40,
                            height: 50
                        }}
                    />

                    <View>
                        <Feather
                            name="shopping-bag"
                            size={24}
                            color={COLORS.black}
                        />
                    </View>
                </View>

                <ScrollView>
                    <View style={{
                        backgroundColor: COLORS.gray,
                        borderRadius: 20,
                        marginTop: SIZES.padding,
                        width: SIZES.width - 44
                    }}>

                        <FlatList
                            horizontal={true}
                            data={shoesList1}
                            keyExtractor={item => item.id}
                            renderItem={
                                ({ item, index }) => (
                                    <Image
                                        source={item.shoes}
                                        resizeMode="contain"
                                    />
                                )
                            }
                        />

                        <FlatList
                            horizontal={true}
                            data={shoesList2}
                            keyExtractor={item => item.id}
                            renderItem={
                                ({ item, index }) => (
                                    <Image
                                        source={item.shoes}
                                        resizeMode="contain"
                                    />
                                )
                            }
                        />


                        <View style={{
                            marginHorizontal: 12,
                            marginVertical: SIZES.padding
                        }}>
                            <Text style={{ ...FONTS.h3 }}>Made for Miles</Text>
                            <Text style={{ ...FONTS.body4, marginVertical: 10 }}>
                                The perfect place to find your new favourite running shoes
                            </Text>
                        </View>
                    </View>

                    <View style={{
                        marginBottom: 120
                    }}>
                        <Text style={{
                            ...FONTS.h3,
                            marginVertical: SIZES.padding * 2
                        }}>The Latest and Greatest</Text>


                        <FlatList
                            // horizontal={false}
                            data={productList}
                            keyExtractor={item => `key=${item.id}`}
                            renderItem={
                                ({ item, index }) => 
                                
                                    (
                                    
                                    <View style={{
                                        marginRight: SIZES.padding
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("Details")}
                                        >
                                            <Image
                                                source={{ uri: 
                                                    item.img[0]
                                                }}
                                                style={{
                                                    height: 200,
                                                    width: 350
                                                }}
                                            />
                                        
                                            <Text style={{
                                                fontSize: 14,
                                                color: COLORS.black,
                                                fontWeight: "bold"
                                            }}>
                                                {item.title}
                                            </Text>
                                        </TouchableOpacity>
                                        <Text style={{
                                            fontSize: 10,
                                            color: COLORS.black
                                        }}>
                                            {item.barnd}
                                        </Text>

                                        <View style={{
                                            flexDirection: "row"
                                        }}>
                                            <Text style={{
                                                fontSize: 12,
                                                marginVertical: 4
                                            }}>
                                                {item.price}VNĐ
                                            </Text>
                                        </View>
                                    </View>
                                )
                                        }
                        />
                        <View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Home