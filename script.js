const loginForm = document.querySelector('.trybewarts-login');

function getFormData(formElement) {
  const fields = {};
  // Inspiração: https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values
  const formData = new FormData(formElement).entries();
  [...formData].forEach(([field, value]) => {
    console.log(`${field} : ${value}`);
    fields[field] = value;
  });
  return fields;
}

function studentLogin(event) {
  event.preventDefault();
  const fields = getFormData(loginForm);
  if (fields.login !== 'tryber@teste.com' || fields.senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginForm.addEventListener('submit', studentLogin);

const buttonSubmit = document.getElementById('submit-btn');
const inputAgreement = document.getElementById('agreement');

function enableSubmit() {
  buttonSubmit.disabled = !buttonSubmit.disabled;
}

inputAgreement.addEventListener('click', enableSubmit);

const evaluationForm = document.getElementById('evaluation-form');

function getContentList(fields) {
  const list = [];
  // pega apenas valores terminando com '-content'
  const re = /\w+-content/;
  Object.keys(fields).forEach((field) => {
    if (field.match(re)) {
      const value = fields[field];
      list.push(value);
    }
  });
  // if (list.length > 0) {
  return list.join(', ');
  // }
  // return '';
}

function changeFormData(event) {
  event.preventDefault();
  const fields = getFormData(evaluationForm);
  const content = `
  Nome: ${fields.name} ${fields.lastname}
  Email: ${fields.email}
  Casa: ${fields.house}
  Família: ${fields.family}
  Matérias: ${getContentList(fields)}
  Avaliação: ${fields.rate}
  Observações: ${fields.observations}
  `;
  console.log(fields, content);
  evaluationForm.innerText = content;
}

buttonSubmit.addEventListener('click', changeFormData);
const textArea = document.getElementById('textarea');
const pCounter = document.getElementById('counter');

textArea.addEventListener('input', (e) => {
  pCounter.innerHTML = `${500 - (e.target.value.length)}`;
});
