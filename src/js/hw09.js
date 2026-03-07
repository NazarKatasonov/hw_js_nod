// hw05.js
const contactApp = document.createElement("div");
document.body.appendChild(contactApp);

contactApp.innerHTML = `
<h1>Контакти</h1>
<input type="text" placeholder="Ім'я" id="firstName">
<input type="text" placeholder="Прізвище" id="lastName">
<input type="text" placeholder="Телефон" id="phone">
<input type="email" placeholder="Email" id="email">
<button id="addContact">Додати контакт</button>
<ul id="contactList"></ul>
`;

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const renderContacts = () => {
    const ul = document.getElementById("contactList");
    ul.innerHTML = "";
    contacts.forEach((c, index) => {
        const li = document.createElement("li");
        li.textContent = `${c.firstName} ${c.lastName} | ${c.phone} | ${c.email}`;
        const delBtn = document.createElement("button");
        delBtn.textContent = "Видалити";
        delBtn.onclick = () => {
            contacts.splice(index, 1);
            localStorage.setItem("contacts", JSON.stringify(contacts));
            renderContacts();
        };
        li.appendChild(delBtn);
        ul.appendChild(li);
    });
};

document.getElementById("addContact").onclick = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    if (!firstName || !lastName || !phone || !email) return alert("Заповніть всі поля");
    contacts.push({ firstName, lastName, phone, email });
    localStorage.setItem("contacts", JSON.stringify(contacts));
    renderContacts();
};

renderContacts();