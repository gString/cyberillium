import {ReactElement, useEffect, useMemo, useState} from "react";
import {useDataContext} from "../contexts/DataContext";
import {getTopArtists} from "../fakeAPI/artists";
import {useSearchContext} from "../contexts/SearchContext";
import {
    Albums,
    BlockingLayer,
    Followers,
    Genres,
    Header,
    Heading,
    Modal,
    ModalImage,
    ModalName,
    Pod,
    PodImage,
    PodName,
    PodsContainer,
    Scroller
} from "./ArtistPage.styles";

export interface ArtistType {
    id: string;
    name: string;
    genres: string[];
    followers: number;
    albums: string[];
    image: string;
}

interface PodProps {
    artist: ArtistType;
    clickHandler: (artist: ArtistType) => void;
}

interface ModalProps {
    artist: ArtistType;
    closeHandler: (artist: null) => void;
}

function ArtistPod({artist, clickHandler}: PodProps): ReactElement {
    return <Pod onClick={() => clickHandler(artist)}>
        <PodImage src={require(`../images/${artist.image}`)}/>
        <PodName>{artist.name}</PodName>
    </Pod>
}

function ArtistDetails({artist, closeHandler}: ModalProps): ReactElement {
    return <BlockingLayer onClick={() => closeHandler(null)}>
        <Modal>
            <Header>
                <ModalImage src={require(`../images/${artist.image}`)}/>
                <Heading>
                    <ModalName>{artist.name}</ModalName>
                    <Followers>{artist.followers} followers</Followers>
                </Heading>
            </Header>
            <Genres><strong>Genres: </strong>{artist.genres.join(", ")}</Genres>
            <Albums><strong>Albums: </strong><Scroller><div>{artist.albums.join(" \u2022 ")}</div></Scroller></Albums>

        </Modal>
    </BlockingLayer>
}

export function ArtistPage(): ReactElement {
    const [selectedArtist, setSelectedArtist] = useState<ArtistType | null>(null)
    const {artists, setArtists} = useDataContext();
    const {search} = useSearchContext();

    const sortedList = useMemo(() => {
        return artists?.sort((a, b) => b.followers - a.followers) || [];
    }, [artists]);
    const filteredArtist = useMemo(() => {
        if (search.length > 0) {
            return sortedList.filter(artist => artist.name.toLowerCase().includes(search.toLowerCase())) || []
        }
        return sortedList;
    }, [search, sortedList]);

    const getArtists = async () => {
        const data = await getTopArtists(50);
        setArtists(data.artists);
    }

    useEffect(() => {
        if (!artists) {
            getArtists();
        }
    }, [artists]);

    const toggleModal = (artist: ArtistType | null) => {
        console.log('artist', artist);
        setSelectedArtist(artist)
    };

    return (
        <>{
            Boolean(filteredArtist.length) ?
                <PodsContainer>
                    {filteredArtist.map(artist => <ArtistPod key={artist.id} artist={artist}
                                                             clickHandler={toggleModal}/>)}
                    {selectedArtist && <ArtistDetails artist={selectedArtist} closeHandler={toggleModal}/>}
                </PodsContainer>
                : <p>Loading ...</p>
        }</>
    );
}