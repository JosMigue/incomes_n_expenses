export const capitalizeString = (str: string) => {
    const splittedString= str.replaceAll('_', ' ').split(' ');
    const capitalizedWords = splittedString.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
}
