const generateTime = dateObj => new Date(dateObj).toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' }).toUpperCase();

const addClassroom = async (data) => {
  const url = '/api/classrooms/create';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    if (json.message) {
      console.log('Error Response:', json.message);
      return null;
    } else {
      console.log('Response:', json);
      return json;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

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
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export {
  generateTime,
  requestClear,
  addClassroom
};
