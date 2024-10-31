import { View, Text, Image, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "@/constants/Icon";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const onboardingSteps = [
  {
    title: "Selamat Datang di Literia",
    subtitle: "Tempat dimana membaca menjadi mudah dan menyenangkan!",
    image: require("../assets/images/onboarding1.png"),
  },
  {
    title: "Personalisasi Bacaanmu",
    subtitle:
      "Personalisasikan rekomendasi bacaan berdasarkan minat dan kebiasaan.",
    image: require("../assets/images/onboarding2.png"),
  },
  {
    title: "Mulai Petualanganmu",
    subtitle:
      "Sudah siap untuk memulai? Temukan dunia baru melalui Literia, Mulai petualangan membaca kamu!",
    image: require("../assets/images/onboarding3.png"),
  },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % onboardingSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-red-500 justify-center">
      <View className="mx-9 items-center ">
        <View className=" mb-7">
          <Image source={onboardingSteps[currentStep].image} />
        </View>
        <Text className="text-xl text-base-black font-abold">
          {onboardingSteps[currentStep].title}
        </Text>
        <Text className="text-center text-sm text-base-black">
          {onboardingSteps[currentStep].subtitle}
        </Text>
        <View className="flex-row mt-4 justify-center space-x-10">
          {onboardingSteps.map((_, index) => (
            <Icon
              key={index}
              name={index === currentStep ? "dot-active" : "dot"}
            />
          ))}
        </View>

        <CustomButton
          title="Saya baru, buat akun"
          containerStyle="w-full mt-16"
          handlePress={() => router.push("/sign-up")}
          type="primary"
        />
        <CustomButton
          title="Masuk"
          containerStyle="w-full"
          handlePress={() => router.push("/sign-in")}
          type="text"
        />
      </View>
      <StatusBar barStyle={"dark-content"} />
    </SafeAreaView>
  );
}
