import React from 'react';

const ModalContext = React.createContext({});

const ModalProvider = ModalContext.Provider;
const ModalConsumer = ModalContext.Consumer;

const generateTime = dateObj => new Date(dateObj).toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' }).toUpperCase();

const requestClear = async (id) => {
  const url = `/api/classrooms/${id}/clear`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    if (json.message) {
      console.log('Error Response:', json.message);
      return null;
    } else {
      console.log('Response:', json);
      return json;
    }
    // const json = await response.json();
    // if (JSON.stringify(json).message) {
    //   console.log('Error Response:', JSON.stringify(json).message);
    //   return null;
    // } else {
    //   console.log('Response:', JSON.parse(json));
    //   return JSON.stringify(json);
    // }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export {
  generateTime,
  requestClear,
  ModalConsumer,
  ModalProvider,
};
