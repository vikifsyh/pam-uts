import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputText from "@/components/InputText";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="bg-[#EBEFFF] w-full h-[320px] rounded-b-[110px] justify-center items-center">
          <Image source={require("../../assets/images/logo.png")} />
        </View>
        <View className="mx-6">
          <InputText
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyle="mt-10"
            keyboardType="email-address"
          />
          <InputText
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyle=""
          />
          <CustomButton
            title="Masuk"
            handlePress={() => router.push("/home")}
            containerStyle="mt-14"
          />
          <View className="flex-row items-center justify-center mt-20">
            <Text className="mb-2">Belum punya akun?</Text>
            <CustomButton
              title="Daftar"
              type="text"
              handlePress={() => router.push("/sign-up")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
