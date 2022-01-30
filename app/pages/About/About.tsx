import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabParams } from '../../navigation/types';
import { styles } from './styles';
type Props = MaterialBottomTabScreenProps<TabParams, 'About'>
const About: React.FC<Props>  = ({ route, navigation}) => {
  const handlePressButton = () => navigation.jumpTo('Quotes')
    return (
      <View style={styles.container}>
        <Text>This app show quotes from Poloniex API</Text>
        <TouchableOpacity 
        onPress={handlePressButton}
        style={styles.button}>
          <Text style={styles.textButton}>
            Navigate to table
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
export default About