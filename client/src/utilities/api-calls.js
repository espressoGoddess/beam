const fetchCall = (entry, id) => {
  const method = entry && id ? "PUT" : entry ? "POST" : "GET";
  const body = entry?.date ? entry : entry ? {journal_entry: entry} : null;
  const path = id ? `/${id}` : '';

  return fetch(`http://localhost:3001/api/v1/entries${path}`, {
    method: method, 
    headers: { 'Content-Type': 'application/json'},
    body: body && JSON.stringify(body)
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

export { fetchCall };
