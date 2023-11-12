import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const inputEmail = document.querySelector('input[name="email"]');
// const textArea = document.querySelector('textarea[name="message"]');
// const btn = document.querySelector('button');

const LOCAL_KEY = 'feedback-form-state';

let formData = {};

form.addEventListener('submit', handleSub);
form.addEventListener('input', throttle(handleSave, 500));

function handleSub(e) {
  e.preventDefault();
  localStorage.removeItem(LOCAL_KEY);
  // inputEmail.value = '';
  // textArea.value = '';
  console.log(formData);
  formData = {};
  // console.log({
  //   email: inputEmail.value,
  //   message: textArea.value,
  // });
  e.target.reset();
}

function handleSave(e) {
  // const formSave = {
  //   email: inputEmail.value,
  //   message: textArea.value,
  // };
  const inputValue = e.target.value.trim();
  const inputName = e.target.name;
  formData[inputName] = inputValue;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

refreshForm();
function refreshForm() {
  try {
    const saveData = localStorage.getItem(LOCAL_KEY);
    if (!saveData) return;
    formData = JSON.parse(saveData);
    Object.entries(formData).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch ({ message }) {
    console.log(message);
  }
}
