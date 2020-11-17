'use strict';

function main() {
  /*-- Adds a new item to the list by creating a new item object --*/
  /*-- Only adds a new item if the input isn't empty --*/

  $('#js-shopping-list-form').on('submit', (e) => {
    e.preventDefault();
    let userInput = $(this).find('input').val();

    if (userInput !== '') {
      $('.shopping-list').append(new listItem(userInput).element);
    }
  });

  /*-- Strikes out item --*/
  $('ul').on('click', '.shopping-item-toggle', (e) => {
    e.preventDefault();
    $(e.currentTarget)
      .closest('li')
      .find('.shopping-item')
      .toggleClass('shopping-item__checked');
  });

  /*-- Deletes item --*/
  $('ul').on('click', '.shopping-item-delete', (e) => {
    $(e.currentTarget).closest('li').remove();
  });
}

/*-- Item object --*/
function listItem(itemName) {
  this.element = $(`<li>
    <span class="shopping-item">${itemName}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
}

$(main);
