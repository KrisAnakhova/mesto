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
const editButton = document.querySelector('.profile__edit-button');

//нашли попап
const popup = document.querySelector('.popup_profile');
//кнопка закрытия
const closeButton = document.querySelector('.popup__close');

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
//открытие попап
function openPopup(popup){
  popup.classList.add('popup_opened');
}
//закрытие попап
function closePopup(popup){
  popup.classList.remove('popup_opened');
}

//открытие попап при нажатии на редак.профиля
editButton.addEventListener('click', function(){
  nameInput.value = profTitle.textContent;
  jobInput.value = profSubtitle.textContent;
  openPopup(popup);
});

//закрытие попап при нажатии на крестик
closeButton.addEventListener('click', function(){
  closePopup(popup);

})

//сделали форму для заполнения с сохранением данных в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();

// Выбрали элементы, куда должны быть вставлены значения полей
// И Вставили новые значения с помощью textContent
  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value;
  closePopup(popup)

  }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»/ сохранить
formPopupPr.addEventListener('submit', handleFormSubmit);
//-------------------------------------------------------------------------------------
//обьявили кнопку открыть попап для добавления карточки
const addButton = document.querySelector('.profile__add-button');

//кнопка закрытия попап для добавления карточек
const closeButtonadd = document.querySelector('.popup__close_card');

//нашли попап для добавления карточек
const popupCards = document.querySelector('.popup_cards');

//открытие попап для добавления карточек при нажатии на кнопку
addButton.addEventListener('click', function(){
  openPopup(popupCards);
});

//закрытие попап для добавления карточек при нажатии на крестик
closeButtonadd.addEventListener('click', function(){
  closePopup(popupCards);
});
//--------------------------------------------------------------------------------------ПР5

const elements = document.querySelector('.elements'); //нашли секцию для карточек
const formPopupCard = document.querySelector('.popup__form-card'); // форма для добавления карточки
const template = document.getElementById('element__template');

//попап открытия картинки
const popupBigcard = document.querySelector('.popup_bigcard');
const closeImg = document.querySelector('.popup__close-img')

closeImg.addEventListener('click', function(){
  closePopup(popupBigcard);
});

const popupImg = document.querySelector('.popup__img');
const popupImgTitle = document.querySelector('.popup__img-title');


// ---------------------фунцкия добавления новой карточки
const getCardElement = ({name, link}) => {
  const newCardElement = template.content.cloneNode(true);
  const newCardName = newCardElement.querySelector('.element__title');
  const newCardLink = newCardElement.querySelector('.element__photo');

  newCardName.textContent = name;
  newCardLink.src = link;
  newCardLink.alt = name;

  //кнопка удаления
  const deleteCard = newCardElement.querySelector('.element__delete');
  deleteCard.addEventListener('click', function() {
    const delBut = deleteCard.closest('.element');
    delBut.remove();
  })

  //кнопка лайка
  const likeCard = newCardElement.querySelector('.element__like');
  likeCard.addEventListener('click', function (evt){
    evt.target.classList.toggle('element__like_active');

  })

  //расширение картинки через попап

  newCardLink.addEventListener('click', function(){
    popupImg.src = link;
    popupImgTitle.textContent = name;
    popupImg.alt = name;

    openPopup(popupBigcard);
  });

  return newCardElement;
}


function renderCard(card, {name, link}) {
  card.prepend(getCardElement({name, link}));
}

//добавление карточек из массива
initialCards.forEach((name, link) => {
  renderCard(elements, name, link)
})

// форма для добавления своей карточки
formPopupCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const link = evt.target.link.value;
  renderCard(elements, {name, link});
  evt.target.reset();
  closePopup(popupCards);

})































