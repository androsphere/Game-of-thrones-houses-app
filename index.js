function fetchHouses() {
    // To pass the tests, don't forget to return your fetch!
    fetch("https://anapioficeandfire.com/api/houses")
    .then((resp) => resp.json())
    .then((json) => renderHouses(json));
    return fetch("https://anapioficeandfire.com/api/houses")
  }
  
  function renderHouses(houses) {
    const main = document.querySelector('main');
    houses.forEach(house => {
      const h2 = document.createElement('h2');
      h2.innerHTML = house.name;
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchHouses();
  });
  