const removeDuplicates = <T>(items: T[], criterion: (item: T) => any): T[] => {
    return items.filter(
        (item, index) => items.findIndex((otherItem) => criterion(item) === criterion(otherItem)) === index
    );
};

export default removeDuplicates;
