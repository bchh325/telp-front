import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type Styles = ViewStyle | TextStyle | ImageStyle

export default function classNames<T extends Styles>(styles: (boolean | T)[]): T[] {
    return styles.filter((isStyle): isStyle is T => Boolean(isStyle)) 
}
