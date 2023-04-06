export type Showitem = {
    id: string;
    title: string;
    streamingPlatform: string;
}

export type ShowCreate = Omit<Showitem, 'id'>;