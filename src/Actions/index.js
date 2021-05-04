export const setTableType = () => {
    return {
    type: 'setTableType'
    }
    };

export const setFavs = () => {
    return {
        type: 'setFavs'
    }
};

export const setData = (item) => {
    return {
        type: 'setData',
        payload: item
    }
};