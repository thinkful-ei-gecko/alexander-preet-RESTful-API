'use strict'

const api = (function(){
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/preet';

    function getItems(){
        return Promise.resolve('A successful response!');
    }
return {
    getItems
}

})();