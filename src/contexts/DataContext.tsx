import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState} from "react";
import {PlaylistType} from "../playlists/PlaylistPage.types";
import {ArtistType} from "../artists/ArtistPage";

interface ContextProps {
    playlists: PlaylistType[] | null;
    setPlaylists: Dispatch<SetStateAction<PlaylistType[] | null>>;
    artists: ArtistType[] | null;
    setArtists: Dispatch<SetStateAction<ArtistType[] | null>>;
}

const ContextInitialValue = {
    playlists: null,
    setPlaylists: () => null,
    artists: null,
    setArtists: () => null,
}

const DataContext = createContext<ContextProps>(ContextInitialValue);

const DataContextProvider = ({ children }: { children: ReactNode }) => {
    const [playlists, setPlaylists] = useState<PlaylistType[] | null>(null);
    const [artists, setArtists] = useState<ArtistType[] | null>(null);

    const value = useMemo(() => ({
        playlists,
        setPlaylists,
        artists,
        setArtists,
    }), [
        playlists,
        setPlaylists,
        artists,
        setArtists,
    ]);

    return (<DataContext.Provider value={value}>{children}</DataContext.Provider>)
};

const useDataContext = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('DataContext must be used within a DataContextProvider')
    }
    return context;
};

export { DataContextProvider, useDataContext };