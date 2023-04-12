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

export { getAllEntries };