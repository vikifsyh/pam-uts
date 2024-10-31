import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#EBEFFF"} />
    </>
  );
}
