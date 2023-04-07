export type ShowItem = {
    id: string;
    title: string;
    streamingPlatform: string;
}

export type ShowCreate = Omit<ShowItem, 'id'>;