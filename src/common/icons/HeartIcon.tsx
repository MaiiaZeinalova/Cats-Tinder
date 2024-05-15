import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface Props {
    style?: ViewStyle;
    color?: string;
}

const HeartIcon: FC<Props> = ({ style, color }) => (
    <Svg width="32" height="32" style={style} fill={color}>
        <Path
            d="M26.7867 3.14666C26.1057 2.46533 25.2971 1.92485 24.4071 1.5561C23.5172 1.18735 22.5633 0.997559 21.6 0.997559C20.6367 0.997559 19.6828 1.18735 18.7929 1.5561C17.9029 1.92485 17.0943 2.46533 16.4133 3.14666L15 4.55999L13.5867 3.14666C12.2111 1.77107 10.3454 0.998272 8.4 0.998272C6.45462 0.998272 4.58892 1.77107 3.21333 3.14666C1.83774 4.52225 1.06494 6.38795 1.06494 8.33332C1.06494 10.2787 1.83774 12.1444 3.21333 13.52L4.62666 14.9333L15 25.3067L25.3733 14.9333L26.7867 13.52C27.468 12.839 28.0085 12.0304 28.3772 11.1405C28.746 10.2505 28.9358 9.29664 28.9358 8.33332C28.9358 7.37001 28.746 6.41613 28.3772 5.52618C28.0085 4.63624 27.468 3.82767 26.7867 3.14666Z"
            fill="#6BD88E"
            stroke="#6BD88E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </Svg>
);

export default HeartIcon;
