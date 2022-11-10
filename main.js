const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnSubmit = document.getElementById('btnSubmit');
const form = document.getElementById('form');
const tableBody = document.getElementById('tableUsersBody')

const users = [];

const showList = () => {
    tableBody.innerHTML='';
    users.forEach(element => {
        tableBody.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.lastName}</td>
            <td>${element.email}</td>
            <td>${element.password}</td>
        
            </tr>
        `
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const newUser = {
        name: nameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    }
    users.push(newUser)
    showList();
    nameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

})





//form.addEventListener('submit', (e) => { processForm(e) });
