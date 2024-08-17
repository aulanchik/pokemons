const capitalize = (word: string) =>
    word
        .split(" ")
        .map((wordPart) => wordPart.charAt(0).toUpperCase() + wordPart.slice(1).toLowerCase())
        .join(" ");

export default capitalize;
