import {View, Text} from 'react-native';
import React from 'react';

export type TProps = {};

export const ProfileScreen: React.FC<TProps> = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 126,
          color: '#BFBFC0',
          fontFamily: 'Nunito Sans',
          fontWeight: 700,
        }}>
        03
      </Text>
    </View>
  );
};
