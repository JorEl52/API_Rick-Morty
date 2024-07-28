const inputCharacter = document.getElementById('txt-character');//Recibo la informacion del input
const containerCards = document.getElementById('containerCards');//Contenedor de las cards
const urlCharacter = "https://rickandmortyapi.com/api/character";
const urlCharacterName = "https://rickandmortyapi.com/api/character/?name=";

//Funcion que obtiene la API
const getAPI = async (urlCharacter) => {
    const response = await fetch(urlCharacter);
    const data = await response.json();

    return data.results;
};

//Función que crea las cards
const createCards = ( character ) => {
    const card = document.createElement('div');//Creo la card
    card.classList.add('card-character');//Agrego la clase card

    const imgCard = document.createElement('img');//creo imagen
    imgCard.src = character.image;//agrego la imagen
    imgCard.alt = character.name;//agrego el nombre de la imagen

    const containerDescription = document.createElement('div');//Creo contenedor de informacion
    containerDescription.classList.add('description-card');//agrego clase del contenedor
    //Creo el elemento h2 y aplico nombre desde la api
    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    //Creo elemento p y aplico informacion status y especie
    const statusCharacter = document.createElement('p');
    statusCharacter.textContent = `${character.status} - ${character.species}`;
    //Genero
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = character.gender;
    const textGender = document.createElement('span');
    textGender.textContent = `Gender: `;
    //Origen
    const originCharacter = document.createElement('p');
    originCharacter.textContent = character.origin.name;
    const textOrigin = document.createElement('span');
    textOrigin.textContent = `Origin: `
    //Localización
    const locationCharacter = document.createElement('p');
    locationCharacter.textContent = character.location.name;
    const textLocation = document.createElement('span');
    textLocation.textContent = `Location: `

    //Se construye el contenedor de la descripcion
    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(statusCharacter);
    containerDescription.appendChild(textGender);
    containerDescription.appendChild(genderCharacter);
    containerDescription.appendChild(textOrigin);
    containerDescription.appendChild(originCharacter);
    containerDescription.appendChild(textLocation);
    containerDescription.appendChild(locationCharacter);
    //Se construye toda la card con descripcion e imagen
    card.appendChild(imgCard);
    card.appendChild(containerDescription);
    //Se agrega la card al contenedor
    containerCards.appendChild(card);
};

//Funcion que trae todos los personajes
const getAllCharacters = async () => {
    const data = await getAPI(urlCharacter);
    data.map( character => createCards(character));
};

const getCharacterByName = async (event) => {
    containerCards.innerHTML = "";
    const data = await getAPI(urlCharacterName + event.target.value);
    data.map( character => createCards(character));
};

window.addEventListener('DOMContentLoaded', getAllCharacters);
inputCharacter.addEventListener('keyup',getCharacterByName);

