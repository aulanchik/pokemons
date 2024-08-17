import capitalize from "./capitalize";

const formatEntry = (statName: string) => {
    switch (statName) {
        case "hp":
            return "HP";
        case "attack":
            return "ATK";
        case "defense":
            return "DEF";
        case "special-attack":
            return "SATK";
        case "special-defense":
            return "RES";
        case "speed":
            return "SPEED";
        default:
            return capitalize(statName);
    }
};

export default formatEntry;
