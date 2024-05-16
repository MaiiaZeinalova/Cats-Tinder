import {
    View,
    TouchableNativeFeedback,
    GestureResponderEvent,
} from 'react-native';
import React, { ReactNode } from 'react';

export type TProps = {
    icon: ReactNode;
    onPress: (event: GestureResponderEvent) => void;
};

export const RoundButton: React.FC<TProps> = ({ icon, onPress }) => {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View
                style={{
                    width: 52,
                    height: 52,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 26,
                    shadowColor: '#BFBFC04D',
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    shadowOffset: {
                        height: 3,
                        width: 3,
                    },
                }}>
                {icon}
            </View>
        </TouchableNativeFeedback>
    );
};
