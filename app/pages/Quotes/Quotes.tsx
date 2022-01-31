import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { View, Text,} from 'react-native';
import { getQuotes, Quote } from '../../requests';
const Quotes = () => {
  const cleanupFunction = React.useRef(false)
  const [seconds, setSeconds] = React.useState(0);
  const [collectionQuotes, setCollectionQuotes] = React.useState<Quote[]>([])
  const updateQuotes = () => {
    getQuotes().then((res) => {
     if (res && !cleanupFunction.current) {
      setCollectionQuotes(res)
      const d = new Date()
      setSeconds(d.getTime())
     }
     })
  }
    useFocusEffect(
      React.useCallback(() => {
       // updateQuotes()
       cleanupFunction.current = false;
       let interval = null;
       interval = setInterval(() => {
        //setSeconds(seconds => seconds + 1);
        updateQuotes()
      }, 2000);
        return () =>  {
          cleanupFunction.current = true;
          clearInterval(interval);
        }
      }, [])
    )
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>{collectionQuotes.length}</Text> */}
        <Text>{seconds}</Text>
      </View>
    );
  }
export default Quotes