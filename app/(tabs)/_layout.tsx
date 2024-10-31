import React from "react";
import { Tabs } from "expo-router";
import Icon from "@/constants/Icon";
import { Text, View } from "react-native";

interface CustomLabelProps {
  title: string;
  focused: boolean;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ title, focused }) => (
  <View style={{ alignItems: "center" }}>
    <Text
      style={{
        color: focused ? "#4163E7" : "#292D32",
        fontWeight: "500",
        fontSize: 12,
      }}
    >
      {title}
    </Text>
  </View>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          height: 74,
          paddingVertical: 10,
          paddingHorizontal: 20,
          shadowColor: "black",
          shadowOpacity: 0.8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`px-2 py-1 ${
                focused ? "bg-[#B1C0F9]" : "bg-transparent"
              } rounded-lg`}
            >
              <Icon name="home" color={focused ? "#1B8C78" : "#292D32"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomLabel title="Beranda" focused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="book"
        options={{
          title: "Buku",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`px-2 py-1 ${
                focused ? "bg-[#B1C0F9]" : "bg-transparent"
              } rounded-lg`}
            >
              <Icon name="book" color={focused ? "#4163E7" : "#292D32"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomLabel title="Buku" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className="p-4 rounded-full bg-[#4163E7]"
              style={{
                position: "absolute",
                bottom: 30,
                alignSelf: "center",
                zIndex: 1,
              }}
            >
              <Icon name="pen" color={"white"} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: "Komunitas",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`px-2 py-1 ${
                focused ? "bg-[#B1C0F9]" : "bg-transparent"
              } rounded-lg`}
            >
              <Icon name="community" color={focused ? "#4163E7" : "#292D32"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomLabel title="Komunitas" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Saya",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`px-2 py-1 ${
                focused ? "bg-[#B1C0F9]" : "bg-transparent"
              } rounded-lg`}
            >
              <Icon name="profile" color={focused ? "#4163E7" : "#292D32"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <CustomLabel title="Saya" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
