function fetchHouses() {
  for (let i = 1; i <= 9; i++) {
    fetch(`https://anapioficeandfire.com/api/houses?page=${i}&pageSize=50`)
      .then(resp => resp.json())
      .then(json => renderHouses(json));
  }
}

function renderHouses(houses) {
  const main = document.querySelector('main');
  houses.forEach((house, index) => {
    const button = document.createElement('button');
    button.textContent = house.name;
    button.className = "houses";
    button.id = index + 1;
    main.appendChild(button);
    const detailsDiv = document.createElement('div');
    detailsDiv.setAttribute("hidden", true);
    detailsDiv.className = "details";
    main.appendChild(detailsDiv);
    button.addEventListener("click", () => {
      const details = document.querySelectorAll(".details")[index];
      details.toggleAttribute("hidden");
    });
    renderDetails(detailsDiv, house.region, "Region: ");
    renderDetails(detailsDiv, house.coatOfArms, "Coat of Arms: ");
    renderDetails(detailsDiv, house.words, "Words: ");
    renderDetails(detailsDiv, house.titles, "Titles: ");
    renderDetails(detailsDiv, house.seats, "Seats: ");
    renderDetails(detailsDiv, house.ancestralWeapons, "Ancestral Weapons: ");
    addComment(detailsDiv);
  });
}

function renderDetails(detailsDiv, input, detailName) {
  if (input !== '') {
    const details = document.createElement('p');
    details.textContent = `${detailName}${input}`;
    detailsDiv.appendChild(details);
  }
}

function addComment(detailsDiv) {
  const form = document.createElement('form');
  const inputComment = document.createElement('input');
  inputComment.setAttribute('type', 'text');
  inputComment.setAttribute('placeholder', 'Leave a comment');
  form.appendChild(inputComment);
  const btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('type', 'submit');
  btnSubmit.textContent = 'Submit';
  form.appendChild(btnSubmit);
  detailsDiv.appendChild(form);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = document.createElement('p');
    comment.textContent = inputComment.value;
    detailsDiv.appendChild(comment);
    inputComment.value = '';
  });
}

document.addEventListener('DOMContentLoaded', fetchHouses);
