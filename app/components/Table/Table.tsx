import * as React from 'react'
import { FlatList, View } from 'react-native'
import { Quote } from '../../types'
import RowItem from '../RowItem/RowItem'
import Row from './Row/Row'
interface Props {
    data: Quote[],
    isError: boolean

}
const HeaderData: Quote = {
    id: 0,
    name: 'name',
    last: 'last',
    lowestAsk: 'lowestAsk',
    highestBid: 'highestBid',
    percentChange: 'percentChange',
    baseVolume: 'baseVolume',
    quoteVolume: 'quoteVolume',
    isFrozen: 'isFrozen',
    postOnly: 'postOnly',
    high24hr: 'high24hr',
    low24hr: 'low24hr'
}
const Table: React.FC<Props> = ({data, isError}) => {
    const Header = React.useCallback(()=> {
        return (
            <>
             {isError && <RowItem label='Error' />}
             <Row {...HeaderData} />
            </>
        )
    }, [isError])
    const RenderItem = React.useCallback(({item,index} : {item: Quote, index: number}) =><Row {...item} />,[])
    return <FlatList
    getItemLayout={(data, index) => (
        {length: 50, offset: 50 * index, index}
      )}
    removeClippedSubviews
    maxToRenderPerBatch={15}
    initialNumToRender={20}
    updateCellsBatchingPeriod={20}
    windowSize={8}
    ListHeaderComponent={Header} 
    data={data}
    keyExtractor={(item) => String(item.id)}
    renderItem={RenderItem}
    />
}
export default Table