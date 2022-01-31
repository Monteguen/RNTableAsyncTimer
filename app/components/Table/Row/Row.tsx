import * as React from 'react'
import {View, Text, FlatList} from 'react-native'
import { Quote } from '../../../types'
import RowItem from '../../RowItem/RowItem'
import { styles } from './styles'
const RowsToView = ['name', 'percentChange','highestBid','last']
const Row: React.FC<Quote> = (props) => {
    const RenderItem = ({item,index})=> (
        <View style={styles.column}>
        <RowItem label={props[item]} />
    </View>
    )
    return <View style={styles.container}>
       <FlatList 
       horizontal
       data={RowsToView}
       keyExtractor={(item) => item}
       renderItem={RenderItem}
       />
    </View>
}
export default React.memo(Row, (prev, next) => {
    return prev.id == next.id && 
    prev.last == next.last &&
    prev.percentChange == next.percentChange &&
    prev.highestBid == next.highestBid
})