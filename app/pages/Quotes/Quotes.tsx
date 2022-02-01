import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import { Table } from '../../components';
import {getQuotes} from '../../requests';
import {Quote} from '../../types';
import { TabParams } from '../../navigation/types';
type Props = MaterialBottomTabScreenProps<TabParams, 'About'>
const Quotes: React.FC<Props> = () => {
  const cleanupFunction = React.useRef(false);
  const [isError, setIsError] = React.useState(false);
  const [isFirstLoadingComplete, setIsFirstLoadingComplete] =
    React.useState(false);
  const [collectionQuotes, setCollectionQuotes] = React.useState<Quote[]>([]);
  const updateQuotes = () => {
    getQuotes()
      .then(res => {
        if (!cleanupFunction.current) {
          if (res) {
            setCollectionQuotes(res);
            setIsError(false);
          } else setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        if (!isFirstLoadingComplete && !cleanupFunction.current)
          setIsFirstLoadingComplete(true);
      });
  };
  useFocusEffect(
    React.useCallback(() => {
      setIsFirstLoadingComplete(false);
      updateQuotes();
      cleanupFunction.current = false;
      let interval = null;
      interval = setInterval(() => {
        updateQuotes();
      }, 5000);
      return () => {
        cleanupFunction.current = true;
        clearInterval(interval);
      };
    }, []),
  );
  return (
    <>
      <Table isError={isError} data={collectionQuotes} />
      {!isFirstLoadingComplete && (
        <ActivityIndicator style={{position: 'absolute', top: 50, alignSelf: 'center'}} size="large" color="blue" />
      )}
    </>
  );
};
export default Quotes;
