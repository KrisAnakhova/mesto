
//console.log('Hello')
//кнопка редоктирования профиля
const editButton = document.querySelector('.profile__edit-button');

const addButton = document.querySelector('.profile__add-button');
//нашли попап
const popup = document.querySelector('.popup');
//кнопка закрытия
const closeButton = document.querySelector('.popup__close');
//кнопка сохранить
const saveButton = document.querySelector('.popup__save');
//нашли имя профиля
const profTitle = document.querySelector('.profile__title');
//нашли о себе
const profSubtitle = document.querySelector('.profile__subtitle');

//открытие попап при нажатии на редак.профиля
editButton.addEventListener('click', function(openPopup) {
  popup.classList.add('popup_opened');
})
//закрытие поап при нажатии на крестик
closeButton.addEventListener('click', function(closePopup) {
  popup.classList.remove('popup_opened');

})
//обьявили формы для заполнения в попап
let formElement = document.querySelector('.popup__editform');
let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_surname');

//сделали форму для заполнения с сохранением данных в профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
//получили значение полей jobInput и nameInput из свойства value
  nameInput.value;
  jobInput.value;
// Выбрали элементы, куда должны быть вставлены значения полей
// И Вставили новые значения с помощью textContent
  profTitle.textContent = nameInput.value;
  profSubtitle.textContent = jobInput.value;
  saveButton.addEventListener('click', function(save) {
    popup.classList.remove('popup_opened');
  })

}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»/ сохранить
formElement.addEventListener('submit', handleFormSubmit);
