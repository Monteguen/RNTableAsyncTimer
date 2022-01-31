import * as React from 'react'
import {View, Text} from 'react-native'
import { Quote } from '../../../types'
import { styles } from './styles'
const Row: React.FC<Quote> = (props) => {
    return <View style={styles.container}>
        <Text style={styles.column}>{props.name}</Text>
        <Text style={styles.column}>{props.percentChange}</Text>
        <Text style={styles.column}>{props.quoteVolume}</Text>
        <Text style={styles.column}>{props.last}</Text>
    </View>
}
export default Row