import React from 'react';
import {Text, View} from 'react-native';
import {TProps} from '../profile';

export const ChatScreen: React.FC<TProps> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 126,
          color: '#BFBFC0',
          fontFamily: 'Nunito Sans',
          fontWeight: 700,
        }}>
        02
      </Text>
    </View>
  );
};
