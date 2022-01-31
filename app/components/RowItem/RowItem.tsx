import * as React from 'react'
import {View, Text} from 'react-native'
import { styles } from './styles'
interface Props {
    label: string
}
const RowItem: React.FC<Props> = ({label}) => {
    return <View style={styles.container}>
        <Text style={styles.text}>
            {label}
        </Text>
        </View>
}
export default RowItem