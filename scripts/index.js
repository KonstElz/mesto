const editButton = document.querySelector('.profile__info-edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const closeProfileIcon = document.querySelector('.popup__close-profile-form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');
const formProfileElement = document.querySelector('.popup__profile-edit-form');
const submitButton = document.querySelector('.popup__button');

function openForm() {
  nameInput.value = infoName.textContent;
  jobInput.value = infoJob.textContent;
  openPopup(popupEditProfile);
}

function closeForm() {
  closePopup(popupEditProfile);
}

function submitProfileForm (evt) {
  evt.preventDefault();

  infoName.textContent = nameInput.value;
  infoJob.textContent = jobInput.value;

  submitButton.classList.add('popup__button_disabled');
  document.getElementById('add-profile').disabled = true;

  closePopup(popupEditProfile);
}

formProfileElement.addEventListener('submit', submitProfileForm);
editButton.addEventListener('click', openForm);
closeProfileIcon.addEventListener('click', closeForm);

const addButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const closeIconAddForm = document.querySelector('.popup__close-add-form');
const titleInput = document.getElementById('photo-name');
const linkInput = document.getElementById('photo-link');
const infoTitle = document.getElementById('photo-name');
const infoLink = document.getElementById('photo-link');
const formAddElement = document.querySelector('.popup__form-add');
const template = document.querySelector('.elements__template');
const popupImage = document.querySelector('.popup-image');
const getCards = document.querySelector('.elements');

function openFormAdd() {
  titleInput.value = infoTitle.textContent;
  linkInput.value = infoLink.textContent;
  openPopup(popupAddCard);
}

function closeFormAdd() {
  closePopup(popupAddCard);
}

function createCard(name, link) {
  const element = template.content.cloneNode(true);
  const title = element.querySelector('h2');
  const img = element.querySelector('img');
  const likeButton = element.querySelector('.element__like-button');
  const removeButton = element.querySelector('.element__remove-button');
    
  title.textContent = name;
  img.src = link;
  img.alt = name;

  function deleteCard() {      
    removeButton.closest('.element').remove();
  }

  removeButton.addEventListener('click', deleteCard);

  function addLike() {
    likeButton.classList.toggle('element__like-button_active');
  }

  likeButton.addEventListener('click', addLike);

  function openImage(event) {
    const imageSrc = event.target.closest('img').src;
    const titleImage = event.target.closest('.element').querySelector('.element__title').textContent;
    
    const imagePreview = document.querySelector('.popup-image__preview');
    const imageTitle = document.querySelector('.popup-image__title');

    imagePreview.src = imageSrc;
    imagePreview.alt = titleImage;
    imageTitle.textContent = titleImage; 
    
    openPopup(popupImage);
  }

  img.addEventListener('click', openImage);

  return element;
};

function closeImage() {
  popupImage.classList.remove('popup_opened');
}

function formAddSubmitHandler (evt) {
  evt.preventDefault();

  const name = titleInput.value;
  const link = linkInput.value;

  const newCard = createCard(name, link);
  getCards.prepend(newCard);
  
  const submitButton = document.querySelector('#add-card');
  submitButton.classList.add('popup__button_disabled');
  document.getElementById('add-card').disabled = true; 
  
  closeFormAdd();
};

formAddElement.addEventListener('submit', formAddSubmitHandler);
addButton.addEventListener('click', openFormAdd);
closeIconAddForm.addEventListener('click', closeFormAdd);

const imageCloseButton = document.querySelector('.popup-image__close');
imageCloseButton.addEventListener('click', () => { closePopup(popupImage) });

initialCards.forEach(function (item) { 
  const name = item.name; 
  const link = item.link; 
    
  const initialCard = createCard(name, link);
  getCards.append(initialCard);
});

// Закрытие попапа при нажатии на "Esc"

const escKeyCode = 27;

function handleEscClose(e) {
  if (e.keyCode === escKeyCode) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openPopup(popupType) {
  popupType.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClose);
}

function closePopup(popupType) {
  popupType.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClose);
}

// Закрытие попапа при нажатии на оверлей

function closePopupOverlayClick(popupType, event) {
  if (event.target === event.currentTarget) {
    closePopup(popupType);
  }
}

popupAddCard.addEventListener('mousedown', function () {
  closePopupOverlayClick(popupAddCard, event);
});

popupEditProfile.addEventListener('mousedown', function () {
  closePopupOverlayClick(popupEditProfile, event);
});

popupImage.addEventListener('mousedown', function () {
  closePopupOverlayClick(popupImage, event);
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});