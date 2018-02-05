const defaultState = {
    searchBarInput :'',
    prediction:'',
    googleResults : null,
    selectedPlace:null,
    noResult: false,
    locations:{
        SanDiego: [
            {
                name:'Bellows',
                img:'https://s3-media1.fl.yelpcdn.com/bphoto/9TFH7xsWJCNUFyyMEE9mrg/348s.jpg',
                eta:'5 min',
                menu:['House-made Sausage','Meatballs','Season Pickles','Salad Lyonnaise']
            },{
                name:'UnderBelly',
                img:'https://s3-media1.fl.yelpcdn.com/bphoto/9EK4xm-5Yz7W3Z9UNJwDRA/348s.jpg',
                menu:['Egg Noodle Soup','Chow Mein','Veggie Soup','Greek Salad'],
                eta:'5 min'
            },{
                name:'Wendy\'s',
                img:'https://www.thedailymeal.com/sites/default/files/styles/hero_image_breakpoints_theme_tdmr_lg_1x/public/story/2016/wendysdouble.JPG?itok=AvYl92-A&timestamp=1474479126',
                menu:['Dove Single','Dave Double','Bacon Cheesburger','Baconator','Double Stack'],
                eta:'45 min'
            },{
                name:'Pizza Hut',
                img:'https://www.thedailymeal.com/sites/default/files/styles/hero_image_breakpoints_theme_tdmr_lg_1x/public/story/2016/wendysdouble.JPG?itok=AvYl92-A&timestamp=1474479126',
                menu:['Chees Pizza','Garlic Breadsticks','BBQ Wings','Pepsi','Cookie'],
                eta:'10 min'
            },{
                name:'Di\'Leones',
                img:'https://static.wixstatic.com/media/c3c5f8_2b7085f1e71d47da9288ff64b2c61aaf~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1025,h_498,al_c,q_85,usm_0.66_1.00_0.01/c3c5f8_2b7085f1e71d47da9288ff64b2c61aaf~mv2_d_5616_3744_s_4_2.webp',
                menu:['Lasanga','Raviolies','Anti Pasta Salad','Calzones','Pasta'],
                eta:'23 min'
            },{
                name:'Ballist Point',
                img:'http://beerstreetjournal.com/wp-content/uploads/Ballast-Point-Pumpkin-Down-Bottles.jpg',
                menu:['Half Dozen Ballest Point Wings','House Made Pretzels','Truffle Fries','Wild Boar Chili','Grilled BBQ Burger'],
                eta:'34 min'
            }
        ],
        LosAngeles: [
            {
                name:'Malibu SeaFood',
                img:'https://media-cdn.tripadvisor.com/media/photo-s/08/9d/2b/47/malibu-seafood.jpg',
                menu:['Crab Salad','Clams','Clam Strips','Fish Sticks','Sword Fish'],
                eta:'16 min'
            },{
                name:'Rubios',
                img:'http://2.bp.blogspot.com/-AJ2AyQkmsOI/VZwyT0486yI/AAAAAAAB4Is/1a90GPqmnMY/s1600/352_1rubios_lobster_tacos_food_stylist_san_francisco.jpg',
                menu:['Grilled Gourment Shrimp Tacos','The Original Fish Taco','Ancho Citrus Grilled Burrito'],
                eta:'28 min'
            },{
                name:'Stone Brewery',
                img:'https://ot-foodspotting-production.s3.amazonaws.com/reviews/2569379/thumb_600.jpg',
                menu:['Hummus Naan','Organic Mixed Green Salad','Spicy Asain Chicken'],
                eta:'19 min'
            },{
                name:'Cocina 88',
                img:'https://media-cdn.tripadvisor.com/media/photo-s/01/c8/56/e0/cocina-88.jpg',
                menu:['Chilaquiles','Huevos Rancheros','Chiles Reuenos','Tamales'],
                eta:'55 min'
            },{
                name:'UnderBelly',
                img:'http://i.imgur.com/WmrbUiu.jpg',
                menu:['Tuna Tataki','Trio Tartare','Shrimp','Gyoza','Boiled Edamamae'],
                eta:'120 min'
            },{
                name:'Rana\'s Cuisine',
                img:'https://s3-media2.fl.yelpcdn.com/bphoto/JEFpxTxwgqMbSHLEBYC-LA/348s.jpg',
                menu:['Tortas Ahogadas','Huaraches','Pambasos','Alambre'],
                eta:'45 min'
            }
        ]
    }
    // locations to test displaying them on the list page
}

export default function searchbarReducer(state = defaultState , action){
    const { type, payload } = action;
    // console.log(payload)

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