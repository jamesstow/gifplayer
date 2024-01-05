export interface Gif {
    name: string;
    url: string;
    lengthInMillis: number;
}

export interface ContentSource {
    getContent(): Promise<Gif[]>;
}