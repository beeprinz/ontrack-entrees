export function getSearch(place){
    // console.log(place,'action')
    return {
        type:'GET_SEARCH',
        payload: place
    }
}

export function updateSearch(search){
    // console.log(search,'action')
    return {
        type:'UPDATE_SEARCH',
        payload: search
    }
}