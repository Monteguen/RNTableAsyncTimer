import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    column: {
        width: Dimensions.get('window').width/4
    }
})