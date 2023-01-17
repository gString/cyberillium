import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState} from "react";

interface ContextProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

const ContextInitialValue = {
    search: "",
    setSearch: () => null,
}

const SearchContext = createContext<ContextProps>(ContextInitialValue);

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [search, setSearch] = useState("");

    const value = useMemo(() => ({
        search,
        setSearch,
    }), [
        search,
        setSearch,
    ]);

    return (<SearchContext.Provider value={value}>{children}</SearchContext.Provider>)
};

const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('SearchContext must be used within a SearchContextProvider')
    }
    return context;
};

export { SearchContextProvider, useSearchContext };