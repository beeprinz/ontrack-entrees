const defaultState = {
    searchBarInput :'',
    noResult: false
}

export default function searchbarReducer(state = defaultState , action){
    const { type, payload } = action;
    // console.log(payload)

    switch(type){
        case 'GET_SEARCH': {
            if(payload){
                return {
                    ...state,
                    searchBarInput: payload
                }
            } else {
                return {
                    ...state,
                    searchBarInput:'none'
                }
            } ;
        } case 'UPDATE_SEARCH': {
            if(payload) {
                return {
                    ...state,
                    searchBarInput: payload
                }
            }break;
        }
        default: {
            return state;
        }
    }
}