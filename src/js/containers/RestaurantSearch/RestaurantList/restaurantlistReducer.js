const defaultState = {
    test:'test'
}

export default function test(state = defaultState , action){
    const { type, payload } = action;
    // console.log(payload)

    switch(type){
        case 'test': {
            if(payload){
                return {
                    ...state,
                    test:true

                }
            } else {
                return {
                    ...state,
                }
            };
        }
        default: {
            return state;
        }
    }
}