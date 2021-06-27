var input = document.querySelector('[data-action="search-value"]');
var searchBtn = document.querySelector('[data-action="search-btn"]');
const _ = require('lodash');

// jQuery(window).on('resize', _.debounce(calculateLayout, 150));

searchBtn.addEventListener('click', _.debounce(justChecking, 150));

function justChecking() {
  console.log('eee boi');
}

// _.debounce(func, [(wait = 500)], [(options = {})]);
