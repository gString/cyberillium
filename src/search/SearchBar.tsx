import {ReactElement, useEffect, useState} from "react";
import {Pages} from "../Layout";
import {useSearchContext} from "../contexts/SearchContext";
import {Bar, SearchIcon, SearchInput, Wrapper} from "./SearchBar.styles";

const LIST_SEARCH_PLACEHOLDER = "Search for song in the list";
const ARTIST_SEARCH_PLACEHOLDER = "Search for an artist";

export function SearchBar({ page }: {page: Pages}): ReactElement {
    const { search, setSearch } = useSearchContext();
    const [placeholder, setPlaceholder] = useState(LIST_SEARCH_PLACEHOLDER);

    useEffect(() => {
        setPlaceholder( page === "PLAYLISTS" ? LIST_SEARCH_PLACEHOLDER : ARTIST_SEARCH_PLACEHOLDER );
        setSearch("");
    }, [page]);

    return (
        <Wrapper>
            <Bar>
                <SearchIcon>&#8981;</SearchIcon>
                <SearchInput placeholder={placeholder} type="text" value={search} onChange={e => setSearch(e.target.value)} />
            </Bar>
        </Wrapper>
    );
}