import { View, Image, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCatInfo } from '../api.ts';
import { TCatInfo, TCardInfo } from '../types.ts';
import { cardHeight } from '../constants.ts';

export type TProps = {
    card: TCatInfo;
};

export type TState = {
    card: TCardInfo;
};

export const Card: React.FC<TProps> = ({ card }) => {
    const [catInfo, setCatInfo] = useState<TState['card']>({});

    useEffect(() => {
        getCatInfo(card.id).then((res: TCatInfo) => {
            const breedInfo = res!.breeds[0];
            const { name, origin, affection_level } = breedInfo;
            setCatInfo({
                name,
                origin,
                affection_level,
            });
        });
    }, []);
    return (
        <View style={styles.container}>
            <Image
                key={card.id}
                source={{
                    uri: card.url,
                }}
                style={{
                    width: '100%',
                    height: cardHeight,
                    borderRadius: 16,
                }}
            />
            <View style={styles.info}>
                <View style={styles.holder}>
                    <View style={styles.nameInfo}>
                        {catInfo.name && (
                            <Text style={styles.text}>{catInfo.name}</Text>
                        )}
                        {catInfo.origin && (
                            <Text style={styles.smallText}>
                                {catInfo.origin}
                            </Text>
                        )}
                    </View>
                    {catInfo.affection_level && (
                        <Text style={styles.text}>
                            {catInfo.affection_level}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: cardHeight,
    },
    info: {
        backgroundColor: '#fff',
        height: 48,
        position: 'absolute',
        bottom: 58,
        left: 16,
        right: 16,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
        paddingBottom: 20,
    },
    holder: {
        paddingTop: 5,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
    },
    nameInfo: {
        flexDirection: 'column',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Nunito Sans',
        color: '#434141',
        fontWeight: '700',
    },
    smallText: {
        fontSize: 8,
        fontFamily: 'Nunito Sans',
        color: '#BFBFC0',
        fontWeight: '700',
    },
});
