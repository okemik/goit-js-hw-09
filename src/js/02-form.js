const form = document.querySelector('.feedback-form');
const textarea = form.elements.message;
const email = form.elements.email;
const localKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(localKey)) || {};

email.value = savedData.email ?? '';
textarea.value = savedData.message ?? '';

form.addEventListener('input', e => {
  const obj = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localKey, JSON.stringify(obj));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // Gerekli alanları kontrol etmek HTML'de sağlandığı için burada fazladan kontrol gerekmez
  console.log('Submitted Form:', {
    email: e.target.elements.email.value.trim(),
    message: e.target.elements.message.value.trim(),
  });

  localStorage.removeItem(localKey);
  form.reset();
});
