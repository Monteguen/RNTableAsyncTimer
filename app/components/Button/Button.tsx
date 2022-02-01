import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
interface Props {
  label: string;
  onPress: () => void;
}
const Button: React.FC<Props> = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
};
export default Button;
