//---Валидация формы «Редактировать профиль»
//const nameInput = document.querySelector('.popup__field_type_name');
//const jobInput = document.querySelector('.popup__field_type_job');
////const inputElement = document.querySelector('.popup__field') //= nameInput имя профиля

const hidddenError = (errorElement, inputErrorClass) => {
  errorElement.innerText = '';
  errorElement.classList.remove(inputErrorClass);

};
const hideInputError = (inputElement, inputInvalidClass) => {
  inputElement.classList.remove(inputInvalidClass);
};

const showError = (errorElement, message, inputErrorClass) => {
  errorElement.innerText = message;
  errorElement.classList.add(inputErrorClass);

};
const showInputError = (inputElement, inputInvalidClass) => {
  inputElement.classList.add(inputInvalidClass);
};

const toggleInputState = (inputElement, options) => {
  const isValid = inputElement.validity.valid;
  setInputState(inputElement, isValid, options);

}




const setInputState = (inputElement, isValid, options) => {
	const { inputSectionSelector, inputErrorSelector, inputErrorClass } = options;
	const inputSectionElement = inputElement.closest(inputSectionSelector);
	const errorElement = inputSectionElement.querySelector(`.${inputElement.id}-error`);
	if (isValid) {
		hidddenError(errorElement, inputErrorClass);
    hideInputError(inputElement, options.inputInvalidClass)
	} else {
		showError(errorElement, inputElement.validationMessage, inputErrorClass);
      showInputError(inputElement, options.inputInvalidClass)

	}
};




const enableButton = (buttonSubmitEl, disabledButtonClass) => {
  buttonSubmitEl.removeAttribute('disabled');
  buttonSubmitEl.classList.remove(disabledButtonClass);
};

const disabledButton = (buttonSubmitEl, disabledButtonClass) => {
  buttonSubmitEl.setAttribute('disabled', true);
  buttonSubmitEl.classList.add(disabledButtonClass);
};

const toggleButtonState = (inputs, submitElement, disabledButtonClass) => {
  const formIsValid = inputs.every((inputElement) => {
  return inputElement.validity.valid;
 });
  if (formIsValid) {
    enableButton (submitElement, disabledButtonClass);

 } else {
   disabledButton(submitElement, disabledButtonClass);
 };
};

const setEventListeners = (form, options) => {
  const submitElement = form.querySelector(options.submitSelector);
  const inputs = Array.from(form.querySelectorAll(options.inputSelector)); //нашли все инпуты

  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement, options);
      toggleButtonState(inputs, submitElement, options.disabledButtonClass);
    });
  });
  toggleButtonState(inputs, submitElement, options.disabledButtonClass);

};

const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formSelector));  //нашли все формы
  forms.forEach(form => {
    setEventListeners(form, options);

  });

};
