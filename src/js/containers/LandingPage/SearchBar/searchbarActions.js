import axios from 'axios'
var service = null;

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

export function getGoogleSearch(search) {
    var service = new google.maps.places.AutocompleteService();

    if (search == '') {
        return {
            type: 'CLEAR_GOOGLE_RESULTS'
        }
    }


    return {
        type: 'UPDATE_GOOGLE_RESULTS',
        payload: new Promise((res, rej) => service.getPlacePredictions({ input: search,  types: ['address'] }, data => res(data)))
    }
}

// export const FETCH_RESTAURANTS = 'FETCH_RESTAURANTS';

// export function fetchRestaurants(value) {
    // var pyrmont = new google.maps.LatLng(lat,lon);
    // console.log(lat,lon)

    // const map = new google.maps.Map(document.getElementById('map'), {
    // center: pyrmont,
    // zoom: 15
    // });
    // var req = {
    //     input:value,
    //     types: ['address']
    // }

    // var request = {
    // location: pyrmont,
    // radius: '50',
    // query: 'address',
    // types: ['address']
    // };

    // const service = new google.maps.places.AutocompleteService();
    // service.getPlacePredictions(req, function(data, status) {
    // console.log('here', data, status);


    // console.log(results.data)

    
    // for(let i = 0; results.length > 0; i++ ){
    //     results.map((x)=>{
    //         results.shift(x)
    //     })
    // }

    // data.map((x) => {
    //         results.unshift(x)
    //     // console.log(x)
    // })
    // return {
    //     type: FETCH_RESTAURANTS,
    //     payload: data
    //     };
    // });
    // const service1 = new google.maps.places.PlacesService(map);
    // service1.nearbySearch(request, function(a, b) {
    // console.log('here', a, b);
    // });

    // return {
    // type: FETCH_RESTAURANTS,
    // payload: data
    // };
// }

export function debounce(a,b,c){var d,e;return function(){function h(){d=null,c||(e=a.apply(f,g))}var f=this,g=arguments;return clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e}}
