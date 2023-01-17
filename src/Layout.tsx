import {ReactElement, useState} from "react";
import {NavBar} from "./navbar/NavBar";
import styled from "styled-components";
import {PlaylistPage} from "./playlists/PlaylistPage";
import {ArtistPage} from "./artists/ArtistPage";
import {SearchBar} from "./search/SearchBar";
import {SearchContextProvider} from "./contexts/SearchContext";
import {DataContextProvider} from "./contexts/DataContext";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const PageView = styled.div`
  flex: 1 1 auto;
  padding: 30px 40px;
  box-sizing: border-box;
  overflow: scroll;
`;

export const pages = {
    PLAYLISTS: "Playlists",
    ARTISTS: "Artists",
}

export type Pages = keyof typeof pages;

export function Layout(): ReactElement {
    const [page, setPage] = useState<Pages>("PLAYLISTS");

    return (
        <Container>
            <SearchContextProvider>
                <NavBar handleChangePage={setPage}/>
                <SearchBar page={page}/>
                <DataContextProvider>
                    <PageView>
                        {/* TODO: Decent routing */}
                        {page === "PLAYLISTS" ? <PlaylistPage/> : <ArtistPage/>}
                    </PageView>
                </DataContextProvider>
            </SearchContextProvider>
        </Container>
    )
}