import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
  type?: "primary" | "text";
}

export default function CustomButton({
  title,
  handlePress,
  containerStyle = "",
  textStyle = "",
  isLoading = false,
  type = "primary",
}: CustomButtonProps) {
  const buttonStyles = {
    primary: "bg-primary",
    text: "bg-white",
  };

  const textStyles = {
    primary: "text-white",
    text: "text-primary",
  };

  const buttonTypeStyle = buttonStyles[type];
  const textTypeStyle = textStyles[type];

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={isLoading}
      className={`${containerStyle} ${
        isLoading ? "opacity-50" : ""
      } py-2 px-4 rounded-md font-abold text-center mb-2 ${buttonTypeStyle}`}
    >
      <Text className={`font-abold text-center ${textTypeStyle} ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
