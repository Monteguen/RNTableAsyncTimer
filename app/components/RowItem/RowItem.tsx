import * as React from 'react'
import {View, Text, Animated} from 'react-native'
import { styles } from './styles'
interface Props {
    label: string
}
import Icon from 'react-native-vector-icons/FontAwesome';
type CompareNewValue = 'old'|'low'|'high'
function isNumeric(str: any) {
    if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
const RowItem: React.FC<Props> = ({label}) => {
    const cleanupFunction = React.useRef(false)
    const prevLabel = React.useRef('')
    const IsLabelNumber = isNumeric(label)
    const [value, setValue] = React.useState(0)
    const [isNew, setIsNew]  = React.useState<CompareNewValue>('old')
    const countAnim = React.useRef(new Animated.Value(0)).current;
    const runAnimate = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(countAnim, {
          toValue: label,
          duration: 800,
          useNativeDriver: false
        }).start(({ finished }) => {
            // completion callback
           // setIsNew('old')
           });
      };
      React.useEffect(() => {
        countAnim.addListener((value) => {
          setValue(value.value)
        });
    
        return () => {
            countAnim.removeAllListeners();
        };
      }, [])

    React.useEffect(()=>{
       // console.log(`label has been changed from ${prevLabel.current} to ${label}`)
        prevLabel.current = label
        let timeout = null;
        if (IsLabelNumber) {
           if (value != 0) setIsNew(Number(label) > value ? 'high' : 'low')
            runAnimate()
        }
        return () =>  {
           cleanupFunction.current = true;
           clearTimeout(timeout);
         }
    }, [label])
    return <View style={styles.container}>
        <Text style={styles.text}>
            { IsLabelNumber ? value.toFixed(7) : label}
        </Text>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4}}>
        { isNew  == 'high' &&  <Icon name="chevron-up" color='green' size={10} /> }
        { isNew == 'low'&& <Icon name="chevron-down" color='red' size={10} />  }
        { isNew == 'old'&& <Icon name="chevron-down" color='yellow' size={10} />  }
        </View>
      
        </View>
}
export default RowItem