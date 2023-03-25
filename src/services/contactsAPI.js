import axios from 'axios';

export async function selectContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function getContactById(contactId) {
  const { data } = await axios.get(`/contacts/${contactId}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function updateContact(contact) {
  const { data } = await axios.patch(`/contacts/${contact.id}`, contact);
  return data;
}
