const fetchData = ( state = 0 , action ) => {
    switch (action.type) {
    case 'SetData' :
    return Object.assign({})
    default: 
    return state
    }}

    export default fetchData;