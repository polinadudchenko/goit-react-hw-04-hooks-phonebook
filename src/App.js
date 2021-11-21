import { useState} from 'react';
import { v1 as uuidv1 } from 'uuid';
import s from './App.module.css';
import { useLocalStorage } from './utils/hooks/useLocalStorage';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from './components/Section'

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', {});
  const [filter, setFilter] = useState('');

  const onHandlerSubmit = (name, number) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert('This contact already in the addressbook')
    }
    setContacts((contacts) => ([...contacts, { id: uuidv1(), name, number}]))
  }

  const handleFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact => (contact.name.toLowerCase().includes(filter.toLowerCase())))
    return filteredContacts;
  }

  const deleteContact = (contactId) => {
    setContacts(contacts => (contacts.filter(contact => contact.id !== contactId)))
  }

  /* const handleAlert = () => {
    alert('No matches is found')
  } */

  return (
      <div className={s.App}>
        <h1 className={s.App_title}>Phonebook</h1>
        <div className={s.App_content}>
        <Section title="Create a new Contact">
        <ContactForm onSubmit={onHandlerSubmit} />
        </Section>
       
        <Section title="Your contacts">
          {!(filterContacts().length === 0)
            ?
            <>
            <Filter onHandleFilter={handleFilter} />
            <ContactList contacts={filter ? filterContacts() : contacts} onDeleteContact={deleteContact} />
            </>
            :
            <p>You don't have any contacts yet, please add one to the form on the left</p>
            }
          </Section>
        </div>
    </div>
  )
}

