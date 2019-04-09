"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Brenden Riley
   Date:   4.9.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
// loads in the setupCart function when the page loads
window.addEventListener("load", setupCart);

// The function will add the event listener to all the buttons that have the .addButton class
function setupCart() {
      var addButtons = document.querySelectorAll(".addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("click", addItem)
      }
}

// Will add the item to the cart
function addItem() {
      // finds the food item (which is the next element after the button)
      var foodItem = event.target.nextElementSibling;
      // Finds the id of the above foodItem variable
      var foodID = foodItem.id;
      // Gets all the child nodes the foodItem variable
      var foodDescription = foodItem.cloneNode(true);
      // Stores the location of the cart in the page
      var cartBox = document.getElementById("cart");
      // Sets the initial value of whether an item is a duplicate to false
      var duplicateOrder = false;
      // Will check to see if the foodItem has been clicked before, in which case it will increase the number of orders, rather than add another element.
      for (var i = 0; i < cartBox.children.length; i++) {
            if (cartBox.children[i].id === foodID) {
                  cartBox.children[i].firstElementChild.textContent++;
                  duplicateOrder = true;
                  break;
            }
      }
      // If duplicateOrder is still false, a span element is added, which includes the foodItem.
      if (duplicateOrder == false) {
            var orderCount = document.createElement("span");
            orderCount.textContent = 1;
            foodDescription.prepend(orderCount);
            cartBox.appendChild(foodDescription);
      }
}