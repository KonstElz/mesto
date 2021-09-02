const editButton = document.querySelector('.profile__info-edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const closeIcon = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');
const formElement = document.querySelector('.popup__form');


function openForm() {
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
  popupEditProfile.classList.add('popup_opened');
}

function closeForm() {
  popupEditProfile.classList.remove('popup_opened');
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

const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add-card');
const closeIconAddForm = document.querySelector('.popup__close-add-form');
const titleInput = document.getElementById('photo-name');
const linkInput = document.getElementById('photo-link');
const infoTitle = document.getElementById('photo-name');
const infoLink = document.getElementById('photo-link');
const formAddElement = document.querySelector('.popup__form-add');
const template = document.querySelector('.elements__template');

function openFormAdd() {
  titleInput.value = infoTitle.textContent;
  linkInput.value = infoLink.textContent;
  popupAdd.classList.add('popup_opened');
}

function closeFormAdd() {
  popupAdd.classList.remove('popup_opened');
}

function toggleLike() {
  likeButton.classList.toggle('element__like-button_active');
}


function formAddSubmitHandler (evt) {
  evt.preventDefault();

    const name = titleInput.value;
    const link = linkInput.value;
    const element = template.content.cloneNode(true);
    const title = element.querySelector('h2');
    const img = element.querySelector('img');
    const likeButton = element.querySelector('.element__like-button');
    const removeButton = element.querySelector('.element__remove-button');

    likeButton.addEventListener('click', addLike);
    
    title.textContent = name;
    img.src = link;
    img.alt = name;
    document.querySelector('.elements').prepend(element);

      function deleteCard() {      
      removeButton.closest('.element').remove();
    }

    removeButton.addEventListener('click', deleteCard);

    function addLike() {
      likeButton.classList.toggle('element__like-button_active');
    }

  closeFormAdd();
}

formAddElement.addEventListener('submit', formAddSubmitHandler);
addButton.addEventListener('click', openFormAdd);
closeIconAddForm.addEventListener('click', closeFormAdd);
