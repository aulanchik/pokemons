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
        <div className="w-full px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between min-h-[64px]">
                <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">PokeDeX Wiki</h1>
                <div className="w-full md:w-auto md:ml-4">
                    <SearchInput placeholder="Search for pokemons..." onChange={handleSearch} value={query} />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
