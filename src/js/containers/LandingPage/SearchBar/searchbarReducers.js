const defaultState = {
    searchBarInput :'',
    prediction:'',
    googleResults : null,
    selectedPlace:null,
    noResult: false
}

export default function searchbarReducer(state = defaultState , action){
    const { type, payload } = action;
    console.log(payload)

    switch(type){
        case 'GET_SEARCH': {
            if(payload){
                return {
                    ...state,
                    searchBarInput: '',
                    selectedPlace:payload

                }
            } else {
                return {
                    ...state,
                    searchBarInput:'none'
                }
            };
        }
        
        case 'UPDATE_SEARCH': {
            if(payload) {
                return {
                    ...state,
                    searchBarInput: payload
                }
            } else {
                return {
                    ...state,
                    searchBarInput: ''
                }
            }
        } 

        case 'CLEAR_GOOGLE_RESULTS': {
            return {
                ...state,
                googleResults : defaultState.googleResults
            }
        }
        
        case 'UPDATE_GOOGLE_RESULTS_FULFILLED': {
            if(payload) {
                return {
                    ...state,
                    googleResults: payload
                }
            }
        }

        case 'PREDICTION_SELECTION':{
            if(payload){
                return {
                    ...state,
                    searchBarInput:payload,
                    googleResults:null
                }
            }
        }

        default: {
            return state;
        }
    }
}