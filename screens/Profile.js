import { View, Text, Image, TouchableOpacity, useWindowDimensions, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";


// const PhotosRoutes = () => (
//   <View style={{ flex: 1 }}>
//     <FlatList
//       data={photos}
//       numColumns={3}
//       renderItem={({ item, index }) => (
//         <View
//           style={{
//             flex: 1,
//             aspectRatio: 1,
//             margin: 3,
//           }}
//         >
//           <Image
//             key={index}
//             source={item}
//             style={{ width: "100%", height: "100%", borderRadius: 12 }}
//           />
//         </View>
//       )}
//     />
//   </View>
// );

// const LikesRoutes = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: "blue",
//     }}
//   />
// );

// const renderScene = SceneMap({
//   first: PhotosRoutes,
//   second: LikesRoutes,
// });

const Profile = (navigation) => {

  // const layout = useWindowDimensions();
  // const [index, setIndex] = useState(0);

  // const [routes] = useState([
  //   { key: "first", title: "Photos" },
  //   { key: "second", title: "Likes" },
  // ]);

  // const renderTabBar = (props) => (
  //   <TabBar
  //     {...props}
  //     indicatorStyle={{
  //       backgroundColor: COLORS.primary,
  //     }}
  //     style={{
  //       backgroundColor: COLORS.white,
  //       height: 44,
  //     }}
  //     renderLabel={({ focused, route }) => (
  //       <Text style={[{ color: focused ? COLORS.black : COLORS.gray }]}>
  //         {route.title}
  //       </Text>
  //     )}
  //   />
  // );

  const favourite = () => {
    console.log("Favourite");
  };

  const shipping = () => {
    console.log("Shipping");
  };

  const payment = () => {
    console.log("Payment");
  };

  const navigateToReportProblem = () => {
    console.log("Report a problem");
  };

  const addAccount = () => {
    console.log("Aadd account ");
  };

  const logout = () => {
    console.log("Logout");
  };

  const orderAndSuport = [
    {
      icon: "favorite-border",
      text: "Favorite",
      action: favourite,
    },
    { 
      icon: "local-shipping", 
      text: "Shipping", 
      action: shipping },
    { 
      icon: "account-balance-wallet", 
      text: "Payment", 
      action: payment },
  ];

  const actionsItems = [
    {
      icon: "outlined-flag",
      text: "Report a problem",
      action: navigateToReportProblem,
    },
    { 
      icon: "people-outline", 
      text: "Add Account", 
      action: addAccount },
    { 
      icon: "logout", 
      text: "Log out", 
      action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: COLORS.gray,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          ...FONTS.semiBold,
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          marginTop: 22,
          marginHorizontal: 22,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={{ ...FONTS.h3 }}>User Profile</Text>
      </View>

      <StatusBar backgroundColor={COLORS.gray} />
      <View style={{ width: "100%" }}>
        <Image
          resizeMode="cover"
          style={{
            height: 140,
            width: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: COLORS.primary,
            borderWidth: 2,
            marginTop: -90,
          }}
        />

        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            marginVertical: 8,}}
        >
          PhanTai
        </Text>
        <Text
          style={{
            color: COLORS.black,
            ...FONTS.body4,
          }}
        >
          Web Deverloper
        </Text>

        {/* <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={24} color="black" />
          <Text
            style={{
              ...FONTS.body4,
              marginLeft: 4,
            }}
          >
            Lagos, Nigeria
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 8,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}
            >
              122
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}
            >
              Followers
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}
            >
              67
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}
            >
              Followings
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.primary,
              }}
            >
              77K
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
              }}
            >
              Likes
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,}}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding * 2,
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}
            >
              Add Friend
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Actions Settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            {orderAndSuport.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ ...FONTS.h4, marginVertical: 10 }}>Actions</Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: COLORS.gray,
            }}
          >
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* <View style={{ flex: 1, marginHorizontal: 22, marginTop: 20 }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default Profile;
