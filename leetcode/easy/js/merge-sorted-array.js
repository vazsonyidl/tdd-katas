export const merge = (arrayToBeUpdated, elementsInArrayToBeUpdated, arrayToBeMerged, elementsInArrayToBeMerged) => {
    arrayToBeUpdated.splice(elementsInArrayToBeUpdated, elementsInArrayToBeMerged);
    const sortedArray = [...arrayToBeUpdated, ...arrayToBeMerged]
        .sort((a, b) => a - b)

    Object.assign(arrayToBeUpdated, sortedArray);
};