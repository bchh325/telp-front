import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export default function classNames(styles: (boolean | ViewStyle | ImageStyle | TextStyle)[] ):  (ViewStyle | ImageStyle | TextStyle)[]{
    return styles.filter((isStyle) => isStyle) as (ViewStyle | ImageStyle | TextStyle)[]
}