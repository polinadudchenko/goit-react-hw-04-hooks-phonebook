import { useEffect, useState} from 'react';
import { v1 as uuidv1 } from 'uuid';
import s from './App.module.css';
import { getDataFromLocalStorage } from './utils/helpers-local-storage'
import { writeDataToLocalStorage } from './utils/helpers-local-storage'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from './components/Section'

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return getDataFromLocalStorage(key) ?? defaultValue
  })

  useEffect(() => {
    writeDataToLocalStorage(key, state)
  }, [key, state])

  return [state, setState]
}

export default function App() {
  const [name, setName] = useLocalStorage('name', '');
  const [name, setName] = useLocalStorage('name', '');
  const [filter, setFilter] = useState('');
  
  /* const componentDidMount() {
    const parsedContacts = getDataFromLocalStorage('contacts');
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  const componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      writeDataToLocalStorage('contacts', this.state.contacts);
    }
    
  } */

  const onHandlerSubmit = (name, number) => {
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert('This contact already in the addressbook')
    }
    setContacts((contacts) => ({
        contacts: [...contacts, { id: uuidv1(), name, number}]
        }))
  }

  const handleFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return filteredContacts;
  }

  const deleteContact = (contactId) => {
    setContacts(contacts => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }))
  }

  const handleAlert = () => {
    alert('No matches is found')
  }

  return (
      <div className={s.App}>
        <h1 className={s.App_title}>Phonebook</h1>
        <div className={s.App_content}>
        <Section title="Create a new Contact">
        <ContactForm onSubmit={onHandlerSubmit} />
        </Section>
       
        <Section title="Your contacts">
            <Filter onHandleFilter={handleFilter} />
            {!(filterContacts().length === 0)
            && <ContactList contacts={filter ? filterContacts() : contacts} onDeleteContact={ deleteContact}/>
            }
          </Section>
        </div>
    </div>
  )
}

