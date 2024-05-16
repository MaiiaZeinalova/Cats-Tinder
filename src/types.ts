export type breed = {
    weight: Record<string, string>;
    id: string;
    name: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: string;
    wikipedia_url: string;
    affection_level: number;
};

export type TCatInfo = {
    id: string;
    width: number;
    height: number;
    url: string;
    breeds: breed[];
};

export type TCardInfo = {
    name: string;
    origin: string;
    affection_level: number;
};

export type TGetCats = () => Promise<TCatInfo[]>;
export type TGetCatInfo = (id: string) => Promise<TCatInfo>;
export type TMakeVote = (id: string, voteValue: number) => void;
