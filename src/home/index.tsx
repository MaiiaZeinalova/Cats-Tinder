import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { CrossIcon, HeartIcon } from '../common/icons';
import { RoundButton } from '../common/RoundButton.tsx';
import { CardSwiper } from './CardSwiper.tsx';
import { getCats, makeVote } from '../api.ts';
import { TCatInfo } from '../types.ts';
const windowWidth = Dimensions.get('window').width;

export type TProps = {
    cats: {
        id: string;
        url: string;
        width: number;
        height: number;
        breeds: [];
        favourite: {};
    }[];
};

export type TState = {
    cats: TCatInfo[];
};

export const HomeScreen: React.FC<TProps> = () => {
    const [cats, setCats] = useState<TState['cats']>([]);

    useEffect(() => {
        getCats().then((res: TCatInfo[]) => {
            setCats(res);
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <CardSwiper cards={cats} />
            <View style={styles.buttonHolder}>
                <RoundButton icon={<CrossIcon />} onPress={() => {}} />
                <RoundButton icon={<HeartIcon />} onPress={() => () => {}} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonHolder: {
        flex: 1,
        flexDirection: 'row',
        width: 150,
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
});
