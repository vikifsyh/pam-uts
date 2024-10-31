import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Alliance-Regular": require("../assets/fonts/Alliance No.1 Regular.otf"),
    "Alliance-Bold": require("../assets/fonts/Alliance No.1 Bold.otf"),
    "Alliance-SemiBold": require("../assets/fonts/Alliance No.1 SemiBold.otf"),
    "Alliance-Medium": require("../assets/fonts/Alliance No.1 Medium.otf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
