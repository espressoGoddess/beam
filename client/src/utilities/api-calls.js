const getAllEntries = () => {
  return fetch('http://localhost:3001/api/v1/entries')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP Status Code: ${response.status}`);
    }
  })
  .catch(error => console.log(error));
}

const addNewEntry = (newEntry) => {
  return fetch('http://localhost:3001/api/v1/entries', {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(newEntry)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`HTTP Status Code: ${response.status}`);
    }
  })
  .catch(error => console.log(error));
}

export { getAllEntries, addNewEntry };