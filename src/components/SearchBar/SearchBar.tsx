import React from "react";
import { SearchInput } from "@/components";

interface SearchBarProps {
    query: string;
    onQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onQuery }): JSX.Element => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onQuery(event.target.value);
    };

    return (
        <div className="relative w-full max-w-md md:ml-4">
            <SearchInput placeholder="Search for pokemons..." onChange={handleSearch} value={query} />
        </div>
    );
};

export default SearchBar;
