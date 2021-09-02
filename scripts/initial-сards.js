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


const element = template.content.cloneNode(true);
const article = document.querySelector('.element');
const popupImage = document.querySelector('.popup-image');
const imagePreview = document.querySelector('.popup-image__preview');
const imageTitle = document.querySelector('.popup-image__title');
const imageCloseButton = document.querySelector('.popup-image__close');
const image = document.querySelectorAll('.element__image');



function openImage(event) {
  const imageSrc = event.target.closest('img').src;
  const titleImage = event.target.closest('.element').querySelector('.element__title').textContent;
  imagePreview.src = imageSrc;
  imageTitle.textContent = titleImage; 
  popupImage.classList.add('popup_opened');
  console.log(titleImage);
  console.log(imageSrc);

}


function closeImage() {
  popupImage.classList.remove('popup_opened');
}

// console.log(`image array: $JSON.stringify(image)`);
// image.forEach(function(item){
//   item.addEventListener('click', openImage);
// }); 

imageCloseButton.addEventListener('click', closeImage);

initialCards.forEach(function (item) { 
    const name = item.name; 
    const link = item.link; 
    const element = template.content.cloneNode(true); 
    const title = element.querySelector('h2'); 
    const img = element.querySelector('img'); 
    const likeButton = element.querySelector('.element__like-button'); 
    const removeButton = element.querySelector('.element__remove-button'); 
 
    
     
    title.textContent = name; 
    img.src = link; 
    img.alt = name; 
    document.querySelector('.elements').append(element); 
 
    function toggleLike() { 
      likeButton.classList.toggle('element__like-button_active'); 
    } 

    function deleteCard() {       
      removeButton.closest('.element').remove(); 
    } 

    img.addEventListener('click', openImage);
 
    removeButton.addEventListener('click', deleteCard); 
    likeButton.addEventListener('click', toggleLike); 
});


// console.log(`image array: ${JSON.stringify(image)}`);
// image.forEach(function(item){
//   item.addEventListener('click', openImage);
// }); 