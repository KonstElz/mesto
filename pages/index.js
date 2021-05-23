const editButton = document.querySelector('.profile__info-edit-button');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');  

function openForm() {
  popup.classList.add('.popup_is-opened');
}

function closeForm() {
  popup.classList.remove('.popup_is-opened');
}

editButton.addEventListener('click', openForm);
closeIcon.addEventListener('click', closeForm);

function formSubmitHandler (evt) {
  evt.preventDefault();  
  document.querySelector('.profile-name').textContent = nameInput;
  document.querySelector('.profile-job').textContent = jobInput;
  closeForm();
}

formElement.addEventListener('submit', formSubmitHandler);