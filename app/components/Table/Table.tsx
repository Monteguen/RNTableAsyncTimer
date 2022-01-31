import * as React from 'react'
import { FlatList, View } from 'react-native'
import { Quote } from '../../types'
import Row from './Row/Row'
interface Props {
    data: Quote[]
}
const Table: React.FC<Props> = ({data}) => {
    const RenderItem = React.useCallback(({item,index} : {item: Quote, index: number}) =><Row {...item} />,[])
    return <FlatList 
    data={data}
    keyExtractor={(item) => String(item.id)}
    renderItem={RenderItem}
    />
}
export default Table