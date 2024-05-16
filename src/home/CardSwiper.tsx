import { StyleSheet, View } from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import { TCatInfo } from '../types.ts';
import { Card } from './Card.tsx';
import { cardHeight } from '../constants.ts';

export type TProps = {
    cards: TCatInfo[];
};

export const CardSwiper: React.FC<TProps> = ({ cards }) => {
    return (
        <View style={styles.container}>
            {cards.length > 0 && (
                <Swiper
                    cards={cards}
                    renderCard={card => <Card card={card} />}
                    onSwipedAll={() => {
                        //TODO: type no cards left
                    }}
                    cardIndex={0}
                    backgroundColor={'#ffffff'}
                    stackSize={3}></Swiper>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: cardHeight,
        overflow: 'hidden',
        marginBottom: 50,
        borderRadius: 16,
    },
});
