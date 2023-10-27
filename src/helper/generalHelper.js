

export const typeChecker = (value) => {

    if (typeof value === 'object' && value !== null) {
        return 'object';
    }
    else if (typeof value === 'array' && value !== null) {
        return 'array';
    }
    else if (typeof value !== 'string' && value !== null) {
        return 'string';
    }
    else {

        if (value !== null) {
            return typeof value;
        }
        else {
            return false;
        }

    }

}