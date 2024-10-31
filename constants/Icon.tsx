import React from "react";
import { Svg, Path, Circle, Rect } from "react-native-svg";

interface IconProps {
  name:
    | "home"
    | "book"
    | "community"
    | "profile"
    | "dot-active"
    | "dot"
    | "eye-slash"
    | "eye"
    | "pen";
  color?: string;
  width?: number;
  height?: number;
}

const Icon = ({
  name,
  color = "#4163E7",
  width = 25,
  height = 24,
}: IconProps) => {
  switch (name) {
    case "pen":
      return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M21.19 8.0399L18.0099 4.85991C16.8099 3.65991 15.16 3.71993 14.35 5.00993L12.58 7.80992L18.25 13.4799L21.05 11.7099C22.26 10.9399 22.33 9.1699 21.19 8.0399Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M18.25 13.4699L18.49 17.5899C18.72 19.8899 17.92 20.6899 15.74 20.9499L7.01999 21.9799C5.17999 22.1899 3.85999 20.87 4.07999 19.04L5.05998 10.7599"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M12.58 7.80994L10.83 7.69995"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M5.27997 20.78L8.45998 17.5899"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M6.52002 8.18005V4.82007"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.15999 6.50006H4.79999"
            stroke={color}
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    case "eye":
      return (
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
          <Path
            d="M15.58 12.4852C15.58 14.4652 13.98 16.0652 12 16.0652C10.02 16.0652 8.42004 14.4652 8.42004 12.4852C8.42004 10.5052 10.02 8.90521 12 8.90521C13.98 8.90521 15.58 10.5052 15.58 12.4852Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M12 20.7552C15.53 20.7552 18.82 18.6752 21.11 15.0752C22.01 13.6652 22.01 11.2952 21.11 9.8852C18.82 6.2852 15.53 4.2052 12 4.2052C8.46997 4.2052 5.17997 6.2852 2.88997 9.8852C1.98997 11.2952 1.98997 13.6652 2.88997 15.0752C5.17997 18.6752 8.46997 20.7552 12 20.7552Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    case "eye-slash":
      return (
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
          <Path
            d="M14.5299 9.95521L9.46992 15.0152C8.81992 14.3652 8.41992 13.4752 8.41992 12.4852C8.41992 10.5052 10.0199 8.90521 11.9999 8.90521C12.9899 8.90521 13.8799 9.30521 14.5299 9.95521Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M17.8201 6.25521C16.0701 4.93521 14.0701 4.21521 12.0001 4.21521C8.47009 4.21521 5.18009 6.29521 2.89009 9.89521C1.99009 11.3052 1.99009 13.6752 2.89009 15.0852C3.68009 16.3252 4.60009 17.3952 5.60009 18.2552"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.41992 20.0152C9.55992 20.4952 10.7699 20.7552 11.9999 20.7552C15.5299 20.7552 18.8199 18.6752 21.1099 15.0752C22.0099 13.6652 22.0099 11.2952 21.1099 9.88522C20.7799 9.36522 20.4199 8.87522 20.0499 8.41522"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M15.5099 13.1852C15.2499 14.5952 14.0999 15.7452 12.6899 16.0052"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M9.47 15.0153L2 22.4853"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M22 2.48523L14.53 9.95523"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    case "dot-active":
      return (
        <Svg width="29" height="6" viewBox="0 0 29 6" fill="none">
          <Rect x="0.5" width="28" height="6" rx="3" fill="#4163E7" />
        </Svg>
      );
    case "dot":
      return (
        <Svg width="7" height="6" viewBox="0 0 7 6" fill="none">
          <Circle cx="3.5" cy="3" r="3" fill="#E8E8E8" />
        </Svg>
      );
    case "home":
      return (
        <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
          <Path
            d="M12.5 18V15"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M10.57 2.82L3.63999 8.37C2.85999 8.99 2.35999 10.3 2.52999 11.28L3.85999 19.24C4.09999 20.66 5.45999 21.81 6.89999 21.81H18.1C19.53 21.81 20.9 20.65 21.14 19.24L22.47 11.28C22.63 10.3 22.13 8.99 21.36 8.37L14.43 2.83C13.36 1.97 11.63 1.97 10.57 2.82Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    case "book":
      return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
          <Path
            d="M22 16.74V4.67001C22 3.47001 21.02 2.58001 19.83 2.68001H19.77C17.67 2.86001 14.48 3.93001 12.7 5.05001L12.53 5.16001C12.24 5.34001 11.76 5.34001 11.47 5.16001L11.22 5.01001C9.44 3.90001 6.26 2.84001 4.16 2.67001C2.97 2.57001 2 3.47001 2 4.66001V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M12 5.49001V20.49"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M7.75 8.49001H5.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.5 11.49H5.5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    case "community":
      return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
          <Path
            d="M9.66 10.87C9.56 10.86 9.44 10.86 9.33 10.87C6.95 10.79 5.06 8.84 5.06 6.44C5.06 3.99 7.04 2 9.5 2C11.95 2 13.94 3.99 13.94 6.44C13.93 8.84 12.04 10.79 9.66 10.87Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M16.91 4C18.85 4 20.41 5.57 20.41 7.5C20.41 9.39 18.91 10.93 17.04 11C16.96 10.99 16.87 10.99 16.78 11"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M4.66 14.56C2.24 16.18 2.24 18.82 4.66 20.43C7.41 22.27 11.92 22.27 14.67 20.43C17.09 18.81 17.09 16.17 14.67 14.56C11.93 12.73 7.42 12.73 4.66 14.56Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M18.84 20C19.56 19.85 20.24 19.56 20.8 19.13C22.36 17.96 22.36 16.03 20.8 14.86C20.25 14.44 19.58 14.16 18.87 14"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    case "profile":
      return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M7.16 14.56C4.74 16.18 4.74 18.82 7.16 20.43C9.91 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.92 12.73 7.16 14.56Z"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    default:
      return null;
  }
};

export default Icon;
