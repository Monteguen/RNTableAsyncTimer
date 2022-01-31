import { useFocusEffect } from '@react-navigation/native';
import * as React from 'react';
import { View, Text,} from 'react-native';
import Table from '../../components/Table/Table';
import { getQuotes} from '../../requests';
import { Quote } from '../../types';
const defaultData: Quote[] = [{"baseVolume": "74921.51348109", "high24hr": "1.06678841", "highestBid": "1.02167994", "id": 734, "isFrozen": "0", "last": "1.02159095", "low24hr": "1.01000000", "lowestAsk": "1.02463398", "marginTradingEnabled": "0", "name": "USDC_ADA", "percentChange": "-0.03806689", "postOnly": "0", "quoteVolume": "72015.52106678"}, {"baseVolume": "3879.94409233", "high24hr": "1.28444599", "highestBid": "1.23516633", "id": 735, "isFrozen": "0", "last": "1.27837296", "low24hr": "1.27837296", "lowestAsk": "1.23888801", "marginTradingEnabled": "0", "name": "USDT_CTC", "percentChange": "0.00319002", "postOnly": "0", "quoteVolume": "3032.38608361"}, {"baseVolume": "175.63346835", "high24hr": "135.00000000", "highestBid": "82.00000000", "id": 736, "isFrozen": "0", "last": "102.00000000", "low24hr": "102.00000000", "lowestAsk": "130.00999999", "marginTradingEnabled": "0", "name": "USDT_METIS", "percentChange": "-0.24444444", "postOnly": "0", "quoteVolume": "1.30816933"}, {"baseVolume": "87.11494304", "high24hr": "0.01700000", "highestBid": "0.01269180", "id": 737, "isFrozen": "0", "last": "0.01700000", "low24hr": "0.01200864", "lowestAsk": "0.01449975", "marginTradingEnabled": "0", "name": "USDT_OOKI", "percentChange": "0.06263282", "postOnly": "0", "quoteVolume": "5950.22362943"}, {"baseVolume": "4974.81564052", "high24hr": "1350.00000000", "highestBid": "532.85716194", "id": 738, "isFrozen": "0", "last": "535.42858294", "low24hr": "470.00000000", "lowestAsk": "537.99999999", "marginTradingEnabled": "0", "name": "USDT_BTRFLY", "percentChange": "-0.33897705", "postOnly": "0", "quoteVolume": "8.01771441"}, {"baseVolume": "11834.96759891", "high24hr": "4.65521845", "highestBid": "3.90822918", "id": 739, "isFrozen": "0", "last": "3.97912380", "low24hr": "3.87055429", "lowestAsk": "4.05300879", "marginTradingEnabled": "0", "name": "USDT_LOOKS", "percentChange": "-0.14350550", "postOnly": "0", "quoteVolume": "2791.61478475"}]
const Quotes = () => {
  const cleanupFunction = React.useRef(false)
  const [seconds, setSeconds] = React.useState(0);
  const [collectionQuotes, setCollectionQuotes] = React.useState<Quote[]>(defaultData)
  const updateQuotes = () => {
    getQuotes().then((res) => {
     if (res && !cleanupFunction.current) {
       console.log(res)
     // setCollectionQuotes(res)
      const d = new Date()
      setSeconds(d.getTime())
     }
     })
  }
    // useFocusEffect(
    //   React.useCallback(() => {
    //    // updateQuotes()
    //    cleanupFunction.current = false;
    //    let interval = null;
    //    interval = setInterval(() => {
    //     //setSeconds(seconds => seconds + 1);
    //     updateQuotes()
    //   }, 2000);
    //     return () =>  {
    //       cleanupFunction.current = true;
    //       clearInterval(interval);
    //     }
    //   }, [])
    // )
    return <Table data={collectionQuotes} />
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{collectionQuotes.length}</Text>
      </View>
    );
  }
export default Quotes