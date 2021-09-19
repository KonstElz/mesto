const editButton = document.querySelector('.profile__info-edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const closeProfileIcon = document.querySelector('.popup__close-profile-form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const infoName = document.querySelector('.profile__info-name');
const infoJob = document.querySelector('.profile__info-job');
const formProfileElement = document.querySelector('.popup__profile-edit-form');

function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

function closePopup(popup) {
  popup.classList.remove('popup_opened');
} 

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

  closeForm();
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

function toggleLike() {
  likeButton.classList.toggle('element__like-button_active');
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
    imageTitle.textContent = titleImage; 
    popupImage.classList.add('popup_opened');
  }

  img.addEventListener('click', openImage);

  return element;
};

function formAddSubmitHandler (evt) {
  evt.preventDefault();

  const name = titleInput.value;
  const link = linkInput.value;

  const newCard = createCard(name, link);
  getCards.prepend(newCard);

  closeFormAdd();
};

formAddElement.addEventListener('submit', formAddSubmitHandler);
addButton.addEventListener('click', openFormAdd);
closeIconAddForm.addEventListener('click', closeFormAdd);

function closeImage() {
  popupImage.classList.remove('popup_opened');
}

const imageCloseButton = document.querySelector('.popup-image__close');
imageCloseButton.addEventListener('click', closeImage);

initialCards.forEach(function (item) { 
  const name = item.name; 
  const link = item.link; 
    
  const initialCard = createCard(name, link);
  getCards.append(initialCard);
});