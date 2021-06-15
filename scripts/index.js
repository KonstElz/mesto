const editButton = document.querySelector('.profile__info-edit-button');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
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

const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
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

      function removePhoto() {      
      removeButton.closest('.element').remove();
    }

    removeButton.addEventListener('click', removePhoto);

    function addLike() {
      likeButton.classList.toggle('element__like-button_active');
    }

  /*let initialNewCards = initialCards.unshift(
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  });*/
  
  /*infoTitle.textContent = titleInput.value;
  infoLink.textContent = linkInput.value;*/

  closeFormAdd();
}

formAddElement.addEventListener('submit', formAddSubmitHandler);
addButton.addEventListener('click', openFormAdd);
closeIconAddForm.addEventListener('click', closeFormAdd);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (item) {
    const name = item.name;
    const link = item.link;
    const element = template.content.cloneNode(true);
    const title = element.querySelector('h2');
    const img = element.querySelector('img');
    const likeButton = element.querySelector('.element__like-button');
    const removeButton = element.querySelector('.element__remove-button');

    likeButton.addEventListener('click', addLike);
    
    title.textContent = name;
    img.src = link;
    img.alt = name;
    document.querySelector('.elements').append(element);

      function removePhoto() {      
      removeButton.closest('.element').remove();
    }

    removeButton.addEventListener('click', removePhoto);

    function addLike() {
      likeButton.classList.toggle('element__like-button_active');
    }
});

/*let popupFullscreenImg = document.querySelector('.popup-fullscreen');
let fullscreenImg = document.querySelector('.popup-fullscreen__image');
let fullscreenImgTitle = document.querySelector('.popup-fullscreen__figcaption');
let fullscreenImgCloseBtn = document.querySelector('.popup-fullscreen__close-button');
let card = document.querySelector('.popup-fullscreen__container');

function popupFullscreenImgOpenClose () {

});*/