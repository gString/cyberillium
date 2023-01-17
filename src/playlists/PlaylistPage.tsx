import {ReactElement, useEffect, useMemo} from "react";
import {getPlaylists} from "../fakeAPI/songs";
import {useSearchContext} from "../contexts/SearchContext";
import {useDataContext} from "../contexts/DataContext";
import {
    ListImage,
    ListName,
    MainList,
    Playlist,
    Song,
    SongAlbum,
    SongArtist,
    SongHeader,
    SongImage,
    SongLength,
    SongList,
    SongTitle
} from "./PlaylistPage.styles";
import {PlaylistType, SongType} from "./PlaylistPage.types";

const formatTime = (num: number) => {
    return num.toFixed(2).toString().replace(".", ":")
}

function SongItem({song}: { song: SongType }): ReactElement {
    return <Song>
        <SongImage src={require(`../images/${song.album.image}`)}/>
        <SongHeader>
            <SongTitle>{song.title}</SongTitle>
            <SongArtist>{song.album.artist}</SongArtist>
        </SongHeader>
        <SongAlbum>{song.album.name}</SongAlbum>
        <SongLength>{formatTime(song.length)}</SongLength>
    </Song>
}

function List({list}: { list: PlaylistType }): ReactElement | null {
    const imageFile = list.list[0].album.image;
    const {search} = useSearchContext();

    const filteredList = useMemo(() => {
        if (search.length > 0) {
            return list.list.filter(song => song.title.toLowerCase().includes(search.toLowerCase())) || []
        }
        return list.list;
    }, [search, list]);

    if (!Boolean(filteredList.length)) return null

    return <>
        <ListName>
            <ListImage src={require(`../images/${imageFile}`)}/>
            {list.name}
            <span>({list.list.length})</span>
        </ListName>
        <Playlist>
            <SongList>{
                filteredList.map(song => <SongItem key={song.id} song={song}/>)
            }</SongList>
        </Playlist>
    </>
}

export function PlaylistPage(): ReactElement {
    // const [lists, setLists] = useState<PlaylistType[] | null>(null);
    const {playlists, setPlaylists} = useDataContext();
    const sortedLists = useMemo(() => {
        return playlists?.sort((a, b) => b.list.length - a.list.length) || [];
    }, [playlists]);

    const getLists = async () => {
        const data = await getPlaylists();
        setPlaylists(data.playlists);
    }

    useEffect(() => {
        if (!playlists) {
            getLists();
        }
    }, [playlists]);

    return (
        <>
            {Boolean(sortedLists.length) ?
                <MainList>
                    {sortedLists?.map(playlist => <List key={playlist.id} list={playlist}/>)}
                </MainList>
                :
                <p>Loading ...</p>
            }
        </>
    );
}