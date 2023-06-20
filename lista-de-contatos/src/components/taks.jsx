import React, { useState } from 'react';

const ContactList = () => {
const [contacts, setContacts] = useState([
    { name: 'Juan', status: 'Conectado' },
    { name: 'Maria', status: 'Desconectado' },
    { name: 'Gerardo', status: 'Desconectado'}
]);

const addContact = (name) => {
    setContacts([...contacts, { name, status: 'Conectado' }]);
};

const deleteContact = (name) => {
setContacts(contacts.filter((contact) => contact.name !== name));
};

const toggleStatus = (name) => {
setContacts(
    contacts.map((contact) =>
    contact.name === name
        ? { ...contact, status: contact.status === 'Conectado' ? 'Desconectado' : 'Conectado' }
        : contact
    )
);
};

return (
    <div className='Padre'>
    <h2>Lista de Contactos</h2>
    <ul>
        {contacts.map((contact) => (
        <li key={contact.name}>
            {contact.name} - {contact.status}
            <button onClick={() => toggleStatus(contact.name)} id='Name' >Cambiar estado</button>
            <button onClick={() => deleteContact(contact.name)} className="bi bi-trash-fill" id='delate' ></button>
        </li>
        ))}
    </ul>
    <input type="text" placeholder="Nombre" id="newContactName" />
    <button onClick={() => addContact(document.querySelector('#newContactName').value)}>
        Agregar contacto
    </button>
    </div>
    );
};



export default ContactList;
