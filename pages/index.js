const editButton = document.querySelector('.profile__info-edit-button');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');
const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');
const formElement = document.querySelector('.popup__form');

function openForm() {
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
  popup.classList.add('popup_opened');
}

function closeForm() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();

  infoName.textContent = nameInput.value;
  infoJob.textContent = jobInput.value;

  closeForm();
}

formElement.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', openForm);
closeIcon.addEventListener('click', closeForm);