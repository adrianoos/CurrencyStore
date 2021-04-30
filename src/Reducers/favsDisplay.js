const favsDisplay = ( state = false , action ) => {
    switch (action.type) {
    case 'setFavs' :
    return !state
    default: 
    return state
    }}

    export default favsDisplay;