import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "@/constants/Icon";

export default function InputText({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}: any) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyle}`}>
      <View className="mt-5">
        <Text className="text-sm text-base-black font-abold">{title}</Text>
        <View className="mt-[6px] w-full h-12 bg-[#F2F4F8] flex-row items-center py-2 px-3 rounded-lg focus:border-2 focus:border-primary focus:outline-none">
          <TextInput
            className="flex-1 text-base-black text-sm"
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            placeholderTextColor={"#8F97A6"}
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
          />
          {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? "eye" : "eye-slash"} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
