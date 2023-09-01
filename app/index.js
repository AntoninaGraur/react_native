import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, } from "../constants/theme";
import { icons } from "../constants/icons";
import {
  ScreenHeaderBtn,
} from "../components/common/header/ScreenHeaderBtn";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            headerShadowVisible: false,
            headerLeft: () => {
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            },
            headerRight: () => {
              <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
            }
          },
        }}
      />
      <View><Text>Home</Text></View>
      
    </SafeAreaView>
  );
};

export default Home;
