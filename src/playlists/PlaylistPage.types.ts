interface AlbumType {
    name: string;
    artist: string;
    year: number;
    image: string;
    id: number;
}

export interface SongType {
    addDate: Date;
    title: string;
    length: number;
    album: AlbumType;
    id: string;
}

export interface PlaylistType {
    name: string;
    list: Array<SongType>;
    id: string;
}