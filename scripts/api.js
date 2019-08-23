'use strict'

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/preet';

  function getItems(){
    return fetch(`${BASE_URL}/items`);
    // Promise.resolve('A successful response!');
  }
  
  function createItem(name) {
    console.log(name);
    const newItem = JSON.stringify({name});
    console.log(newItem);
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: newItem
    });
  }

  function updateItem(id, updateData){
    console.log(updateData);
    const newName = JSON.stringify(updateData);
    console.log(newName);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: newName
    });
  }

  function deleteItem(id){
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'}
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };

})();