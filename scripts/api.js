'use strict'

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/preet';

  function getItems(){
    return fetch(`${BASE_URL}/items`);
    // Promise.resolve('A successful response!');
  }
  
  function createItem(name) {
    const newItem = JSON.stringify({name});
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: newItem
    });
  }

  function updateItem(id, updateData){
      const random = JSON.stringify({updateData});
      return fetch(`${BASE_URL}/items/${id}`, {
          method: 'PATCH',
          headers: {'Content-Type':'application/json'},
          body: random
      });
  }

  return {
    getItems,
    createItem,
    updateItem
  };

})();