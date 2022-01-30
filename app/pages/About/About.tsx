import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import * as React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';
import { TabParams } from '../../navigation/types';
import { styles } from './styles';
type Props = MaterialBottomTabScreenProps<TabParams, 'About'>
const About: React.FC<Props>  = ({ route, navigation}) => {
  const handlePressButton = () => navigation.jumpTo('Quotes')
    return (
      <View style={styles.container}>
        <Text>This app show quotes from Poloniex API</Text>
        <Button 
        onPress={handlePressButton}
        label='Navigate to table'
        />
      </View>
    );
  }
export default About