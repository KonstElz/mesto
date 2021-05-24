const editButton = document.querySelector('.profile__info-edit-button');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function openForm() {
  popup.classList.add('popup_opened');
}

function closeForm() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openForm);
closeIcon.addEventListener('click', closeForm);

function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInput = document.querySelector('.profile-name').textContent = nameInput;
  const jobInput = document.querySelector('.profile-job').textContent = jobInput;

  closeForm();
}

formElement.addEventListener('submit', formSubmitHandler);