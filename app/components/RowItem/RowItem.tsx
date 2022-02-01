import * as React from 'react';
import {View, Text, Animated} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isNumeric} from '../../utils'
import { CompareNewValue } from '../../types';
interface Props {
  label: string;
}
const RowItem: React.FC<Props> = ({label}) => {
  const cleanupFunction = React.useRef(false);
  const prevLabel = React.useRef('');
  const IsLabelNumber = isNumeric(label);
  const [value, setValue] = React.useState(0);
  const [isNew, setIsNew] = React.useState<CompareNewValue>('old');
  const countAnim = React.useRef(new Animated.Value(0)).current;
  const runAnimate = () => {
    Animated.timing(countAnim, {
      toValue: Number(label),
      duration: 800,
      useNativeDriver: false,
    }).start();
  };
  React.useEffect(() => {
    countAnim.addListener(value => {
      setValue(value.value);
    });

    return () => {
      countAnim.removeAllListeners();
    };
  }, []);

  React.useEffect(() => {
    let timeout = null;
    if (IsLabelNumber) {
      if (prevLabel.current != '') setIsNew(Number(label) > value ? 'high' : 'low');
      runAnimate();
    }
    prevLabel.current = label;
    return () => {
      cleanupFunction.current = true;
      clearTimeout(timeout);
    };
  }, [label]);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, IsLabelNumber ? {} : {fontWeight: 'bold'}]}>
        {IsLabelNumber ? value.toFixed(7) : label}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 4,
          marginRight: (isNew == 'old' && IsLabelNumber) ? 10: 0
        }}>
        {isNew == 'high' && <Icon name="chevron-up" color="green" size={10} />}
        {isNew == 'low' && <Icon name="chevron-down" color="red" size={10} />}
      </View>
    </View>
  );
};
export default RowItem;
