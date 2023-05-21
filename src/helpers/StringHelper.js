const areAnyUndefined = (list) => {
    return list.filter( (element) => {
        return element === undefined
            || element.length === 0
    } ).length > 0;
};

export {
    areAnyUndefined
};
