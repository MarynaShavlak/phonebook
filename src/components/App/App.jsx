import React, { useState} from 'react';
import { nanoid } from 'nanoid';
import { Container } from "./App.styled";
import { Section } from "components/Section";
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Notification } from 'components/Notification';
import { ToastContainer, toast } from 'react-toastify';
import { Layout } from 'components/Layout';
import { useLocalStorage } from 'hooks/useLocalStorage';


export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);  
  const [filter, setFilter] = useState('');


  const addContact = (contact) => {
    let isExist = checkContactInBook(contact)
    if (isExist) {
      return;
    }

    const contactWithId = {
      id: nanoid(),
      ...contact,
    }
    
    setContacts([contactWithId, ...contacts])
    return isExist= true;

  }

  const checkContactInBook = (contact) => {
    let isContactExist = false;
    let isNumberExist = contacts.some(el => el.number === contact.number);
    let isNameExist = contacts.some(el => el.name === contact.name);
    if (isNameExist && isNumberExist) {
        toast.error(`Ooops, contact with name ${contact.name} and number ${contact.number} is already in your phonebook`
      );
      return isContactExist=true;
    }
    if (isNameExist) {
      toast.error(`Ooops, contact with name ${contact.name} is already in your phonebook`
      );
      return isContactExist = true;
      
    }
    if (isNumberExist) {
            toast.error(`Ooops, contact with number ${contact.number} is already in your phonebook`
      );

      return isContactExist=true;
    }
    
    return isContactExist;
  }
  
  
  
  const deleteContact = (contactId) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

 

  const changeContact = (contact) => {

    console.log(contacts);


    setContacts(
      contacts.map(el => {
      if (el.name === contact.name) {
        const newEl = {
          id: nanoid(),
          name: el.name,
          number: contact.number,
        }
        return newEl;
      } else if (el.number === contact.number) {
        const newEl = {
          id: nanoid(),
          name: contact.name,
          number: el.number,
        }
        return newEl;
      }
      return el;
    })
    )

  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.map(el => {
  //     if (el.name === contact.name) {
  //       const newEl = {
  //         id: nanoid(),
  //         name: el.name,
  //         number: contact.number,
  //       }
  //       return newEl;
  //     } else if (el.number === contact.number) {
  //       const newEl = {
  //         id: nanoid(),
  //         name: contact.name,
  //         number: el.number,
  //       }
  //       return newEl;
  //     }
  //     return el;
  //   })
  //   }))
  }

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value)
  }
  

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }

  
    const filteredContacts = getFilteredContacts();
  const hasContactsInBook = contacts.length !== 0;
  
    return (
      <Layout>
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} operationType ="Add contact" />
        </Section>
        <Section title="Contacts">
          {hasContactsInBook
            ?
            (
              <>
              <Filter value={filter} onChange={changeFilter} />
              <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} onChangeContact={changeContact}></ContactList>
              </>
            )
            :
            (<Notification message="There are no contacts in your phonebook yet" />)
          }
        </Section>
          <ToastContainer
            position="top-right"
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover={false}
            theme="colored"
            autoClose={4000} />
      </Container>

      </Layout>
      
    );
}
