import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, images, SIZES } from '../constants'
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons"

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isFavourite,setIsFavourite] = useState(false);

  const handleSearch = () => {
    // Perform search logic here based on the searchText
    // Update the searchResults state with the search results
    // For example, you can use an API call to get search results
    // setSearchResults([...results]);
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white
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
          {/* <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              width: 40,
              height: 50
            }}
          /> */}

          <View>
            {/* <View style={{
              position: "absolute",
              bottom: 16,
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: COLORS.black,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999
            }}>
              <Text style={{
                fontSize: 10,
                color: COLORS.white
              }}>8</Text>
            </View> */}
            <Feather
              name="shopping-bag"
              size={24}
              color={COLORS.black}
              style={{
                marginHorizontal: 22,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "absolute",
                top: 22,
                left: 305
              }}
            />
          </View>
        </View>

        <TextInput
          style={{ 
            marginHorizontal: 32,
            marginTop: 12,
            height: 40, 
            borderColor: 'gray', 
            borderWidth: 1,
            borderRadius: 14,
            padding: 10,
            width: 280
          }}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          placeholder="Enter search text"
          onSubmitEditing={handleSearch}
        />
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log('Item selected:', item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={{
          marginHorizontal: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          width: SIZES.width - 44,
          top: 22,
          zIndex: 999
        }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.black}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
          >
            {
              isFavourite ? (
                <Ionicons
                  name="md-heart-sharp"
                  size={24}
                  color={COLORS.black}
                />
              ) : (
                <Ionicons
                  name="md-heart-outline"
                  size={24}
                  color={COLORS.black}
                />
              )
            }
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search