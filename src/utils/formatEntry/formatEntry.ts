import capitalize from "../capitalize";

const formatEntry = (statName: string) => {
    switch (statName) {
        case "hp":
            return "Health Points";
        case "attack":
            return "Attack";
        case "defense":
            return "Defense";
        case "special-attack":
            return "Special Atk.";
        case "special-defense":
            return "Special Def.";
        case "speed":
            return "Speed";
        default:
            return capitalize(statName);
    }
};

export default formatEntry;
