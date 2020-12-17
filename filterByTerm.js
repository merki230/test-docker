/**
 * Filtre terms
 * @param {*} inputArr 
 * @param {*} searchTerm 
 */
const filterByTerm = (inputArr, searchTerm) => {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}

export { filterByTerm };