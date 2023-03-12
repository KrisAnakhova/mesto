const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
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
  },
  {
    name: 'Гонода',
    link: 'https://images.unsplash.com/photo-1677118394309-c003102a275d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
];

//console.log('Hello')
//кнопка редоктирования профиля
const buttonEdit = document.querySelector('.profile__edit-button'); //editButton

//нашли попап
const popup = document.querySelector('.popup_profile');
//кнопка закрытия
const buttonClose = document.querySelector('.popup__close'); //closeButton

//нашли имя профиля
const profTitle = document.querySelector('.profile__title');
//нашли о себе
const profSubtitle = document.querySelector('.profile__subtitle');
const popupOpen = document.querySelector('.popup__opened');

//обьявили формы для заполнения в попап редак.профиля
const formPopupPr = document.querySelector('.popup__editform');
const nameInput = document.querySelector('.popup__field_type_name');
const jobInput = document.querySelector('.popup__field_type_job');

//------------------------------------------------------------------------
//открытие попап + для ПР6 вставили слушатель для закрытия через кнопку ESC
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      popup.classList.remove('popup_opened');
    };

  });
};

//закрытие попап
function closePopup(popup){
  popup.classList.remove('popup_opened');
};

//открытие попап при нажатии на редак.профиля
buttonEdit.addEventListener('click', function(){
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
 openPopup(popup);
});

//закрытие попап при нажатии на крестик
buttonClose.addEventListener('click', function(){
  closePopup(popup);

});

//сделали форму для заполнения с сохранением данных в профиле
function handleFormProfileSubmit(evt) {
  evt.preventDefault();

// Выбрали элементы, куда должны быть вставлены значения полей
// И Вставили новые значения с помощью textContent
  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value;
  closePopup(popup)
};
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»/ сохранить

formPopupPr.addEventListener('submit', handleFormProfileSubmit);

//-------------------------------------------------------------------------------------
//обьявили кнопку открыть попап для добавления карточки
const buttonAdd = document.querySelector('.profile__add-button'); //addButton

//кнопка закрытия попап для добавления карточек
const buttonClosePopupCard = document.querySelector('.popup__close_card'); //closeButtonadd

//нашли попап для добавления карточек
const popupCards = document.querySelector('.popup_cards');

//открытие попап для добавления карточек при нажатии на кнопку
buttonAdd.addEventListener('click', function(){
  openPopup(popupCards);
});

//закрытие попап для добавления карточек при нажатии на крестик
buttonClosePopupCard.addEventListener('click', function(){
  closePopup(popupCards);
});
//--------------------------------------------------------------------------------------ПР5

const elements = document.querySelector('.elements'); //нашли секцию для карточек
const formPopupCard = document.querySelector('.popup__form-card'); // форма для добавления карточки
//const template = document.getElementById('element__template');

//попап открытия картинки
const popupBigCard = document.querySelector('.popup_bigcard');
const imgClose = document.querySelector('.popup__close-img') //closeImg

imgClose.addEventListener('click', function(){
  closePopup(popupBigCard);
});

const popupImg = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');


// ---------------------функция добавления новой карточки
const getCardElement = ({name, link}) => {
  const template = document.getElementById('element__template').content;
  const newCardElement = template.querySelector('.element').cloneNode(true);
  const newCardName = newCardElement.querySelector('.element__title');
  const newCardLink = newCardElement.querySelector('.element__photo');

  newCardName.textContent = name;
  newCardLink.src = link;
  newCardLink.alt = name;

    //кнопка удаления + слушатель
  const cardDelete = newCardElement.querySelector('.element__delete'); //deleteCard
  cardDelete.addEventListener('click', function() {
    deleteCard(newCardElement)

  });

  //кнопка лайка
  const cardLike = newCardElement.querySelector('.element__like'); //likeCard
  cardLike.addEventListener('click', function (evt){
    evt.target.classList.toggle('element__like_active');

  });


  //расширение картинки через попап

  newCardLink.addEventListener('click', function(){
    popupImg.src = link;
    popupImgTitle.textContent = name;
    popupImg.alt = name;

    openPopup(popupBigCard);
  });

  return newCardElement;
}
//функция удаления карточки удаления
function deleteCard(newCardElement) {
  newCardElement.remove('.element');
};


function renderCard(card, {name, link}) {
  card.prepend(getCardElement({name, link}));
};

//добавление карточек из массива
initialCards.forEach((name, link) => {
  renderCard(elements, name, link)
});

// форма для добавления своей карточки
formPopupCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const link = evt.target.link.value;
  renderCard(elements, {name, link});
  closePopup(popupCards);
  evt.target.reset();

});
//--------------------------------ПР6----------------------------------------------------------------

//--Закрытие всех попап кликом на оверлей

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
  closePopup(popup);
  }
});
popupCards.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
  closePopup(popupCards);
  }
});
popupBigCard.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
    closePopup(popupBigCard);
  }
});
//--------------------------------------------------------------------------------------------------------


const options = {
  formSelector: '.popup__editform',
  submitSelector: '.popup__save',
  inputSelector: '.popup__field',
  inputInvalidClass: 'popup__field_invalid',
  disabledButtonClass: 'popup__save_inactive',
  inputSectionSelector: '.popup',
  inputErrorSelector: '.popup__field-error',
  inputErrorClass: 'popup__field-error_active',

}

enableValidation(options);


















