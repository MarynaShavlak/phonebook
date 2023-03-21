import axios from 'axios';

axios.defaults.baseURL = 'https://6418797429e7e36438e9a91c.mockapi.io';

export async function getContacts() {
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
  const { data } = await axios.put(`/contacts/${contact.id}`, contact);
  return data;
}
