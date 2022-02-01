import { Dimensions, StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50
    },
    column: {
        width: Dimensions.get('window').width/4
    }
})