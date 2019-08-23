'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
  .then(res => console.log(res));
  console.log(api.BASE_URL);
  
});

store.items.push(Item.create('apples'));

