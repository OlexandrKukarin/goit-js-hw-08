import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const textArea = document.querySelector('textarea[name="message"]');
const btn = document.querySelector('button');

const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('submit', handleSub);
form.addEventListener('input', throttle(handleSave, 500));

function handleSub(e) {
  e.preventDefault();
  localStorage.removeItem(LOCAL_KEY);
  // inputEmail.value = '';
  // textArea.value = '';
  console.log({
    email: inputEmail.value,
    message: textArea.value,
  });
  form.reset();
}

function handleSave(e) {
  const formSave = {
    email: inputEmail.value,
    message: textArea.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formSave));
}

// function loadForm() {
//   const storForm = localStorage.getItem(LOCAL_KEY);
//   if (storForm) {
//     const formS = JSON.parse(storForm);
//     inputEmail = formS.email;
//     textArea = formS.message;
//   }
// }
// loadForm();
