import { TGetCatInfo, TGetCats, TMakeVote } from './types.ts';

export const getCats: TGetCats = async () => {
    const options = {
        method: 'GET',
    };
    try {
        const response = await fetch(
            'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1',
            options,
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.error('fetch error', e);
    }
};

export const getCatInfo: TGetCatInfo = async id => {
    const options = {
        method: 'GET',
    };
    const response = await fetch(
        `https://api.thecatapi.com/v1/images/${id}`,
        options,
    );
    const data = await response.json();
    return data;
};

export const makeVote: TMakeVote = async (id, voteValue) => {
    const options = {
        method: 'POST',
        body: JSON.stringify({
            image_id: id,
            value: voteValue,
        }),
    };

    try {
        const response = await fetch(
            'https://api.thecatapi.com/v1/votes',
            options,
        );
    } catch (e) {
        console.error('fetch error', e);
    }
};
