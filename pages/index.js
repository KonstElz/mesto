const editButton = document.querySelector('.profile__info-edit-button');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');

function openForm() {
  nameInput.value = document.querySelector('.profile__info-name').textContent;
  jobInput.value = document.querySelector('.profile__info-job').textContent;
  popup.classList.add('popup_opened');
}

function closeForm() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  document.querySelector('.profile__info-name').textContent = nameInput.value;
  document.querySelector('.profile__info-job').textContent = jobInput.value;

  closeForm();
}

let formElement = document.querySelector('.popup__form');

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openForm);
closeIcon.addEventListener('click', closeForm);