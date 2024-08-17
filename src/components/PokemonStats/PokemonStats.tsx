import React from "react";
import { PokemonStat } from "@/types";
import { formatEntry } from "@/utils";

interface PokemonStatsProps {
    stats: PokemonStat[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
    return (
        <div>
            <p className="text-white text-xl text-center font-bold">Stats</p>
            <div className="grid grid-cols-2 gap-4 p-2">
                {stats.map((stat) => {
                    const statName = formatEntry(stat.stat.name);
                    const statValue = stat.base_stat;

                    return <StatItem key={statName} name={statName} value={statValue} />;
                })}
            </div>
        </div>
    );
};

interface StatItemProps {
    name: string;
    value: number;
}

const StatItem: React.FC<StatItemProps> = ({ name, value }) => (
    <div className="flex flex-col place-items-center">
        <h3 className="text-white p-2 inline-block">
            <p className="text-lg text-center">
                {name}: <span className="font-bold text-xl">{value}</span>
            </p>
        </h3>
    </div>
);

export default PokemonStats;
