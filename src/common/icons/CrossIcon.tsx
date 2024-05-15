import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
    style?: ViewStyle;
    color?: string;
}

const CrossIcon: FC<Props> = ({ style, color }) => (
    <Svg width="32" height="32" fill="none" style={style}>
        <Path
            d="M24 8L8 24"
            stroke="#E16359"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <Path
            d="M8 8L24 24"
            stroke="#E16359"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </Svg>
);

export default CrossIcon;
