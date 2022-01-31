import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { View, Text,} from 'react-native';
import { getQuotes, Quote } from '../../requests';
const Quotes = () => {
  const cleanupFunction = React.useRef(false)
  const [collectionQuotes, setCollectionQuotes] = React.useState<Quote[]>([])
  const updateQuotes = () => {
    getQuotes().then((res) => {
     if (res && !cleanupFunction.current) {
      setCollectionQuotes(res)
     }
     })
  }
    React.useEffect(()=>{
      updateQuotes()
      return () => {
        cleanupFunction.current = true
    }
    },[])
    useFocusEffect(
      React.useCallback(() => {
        updateQuotes()
        return () =>  cleanupFunction.current = true;
      }, [])
    )
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{collectionQuotes.length}</Text>
      </View>
    );
  }
export default Quotes