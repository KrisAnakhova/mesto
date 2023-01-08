
//console.log('Hello')
//кнопка редоктирования профиля
const editButton = document.querySelector('.profile__edit-button');


//нашли попап
const popup = document.querySelector('.popup');
//кнопка закрытия
const closeButton = document.querySelector('.popup__close');
//кнопка сохранить / создать
//const saveButton = document.querySelector('.popup__save');
//нашли имя профиля
const profTitle = document.querySelector('.profile__title');
//нашли о себе
const profSubtitle = document.querySelector('.profile__subtitle');
const popupOpen = document.querySelector('.popup__opened');

//обьявили формы для заполнения в попап редак.профиля
let formPopup = document.querySelector('.popup__editform');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_job');

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
  //saveButton.addEventListener('click', function(save) {
  //popup.classList.remove('popup_opened');
  }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»/ сохранить
formPopup.addEventListener('submit', handleFormSubmit);
//-------------------------------------------------------------------------------------
//обьявили кноопку открыть попап карточки
const addButton = document.querySelector('.profile__add-button');

//кнопка закрытия попап карточек
const closeButtonadd = document.querySelector('.popup__close_card');

//нашли попап карточек
const popupCards = document.querySelector('.popup_cards');
//обьявили формы для заполнения в попап карточек
let mestoInput = document.querySelector('.popup__field_type_mesto');
let linkInput = document.querySelector('.popup__field_type_link');

//открытие попап с карточками при нажатии на кнопку
addButton.addEventListener('click', function(){
  openPopup(popupCards);
});

//закрытие попап при нажатии на крестик
closeButtonadd.addEventListener('click', function(){
  closePopup(popupCards);
})

