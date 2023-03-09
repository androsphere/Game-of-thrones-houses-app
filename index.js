function fetchHouses() {

  for(let i=1; i<= 9;){
    fetch(`https://anapioficeandfire.com/api/houses?page=${i}&pageSize=50`)
    .then((resp) => resp.json())
    .then((json) => renderHouses(json))
    i++;
  }
    
  }
  
  function renderHouses(houses) {
    const main = document.querySelector('main');
    houses.forEach(house => {
      const h2 = document.createElement('h2');
      h2.innerHTML = house.name;
      main.appendChild(h2);
      const h3 = document.createElement('h3');
      h3.innerHTML = 'Region: ' + house.region;
      main.appendChild(h3);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchHouses();

  });
  