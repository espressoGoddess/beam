const fetchCall = (entry, id) => {
  const method = entry && id ? "PUT" : entry ? "POST" : "GET";
  const body = entry?.date ? entry : entry && {journal_entry: entry};
  const path = id ? `/${id}` : '';

  return fetch(`https://beam-your-feelings-api.herokuapp.com/api/v1/entries${path}`, {
    method: method, 
    headers: { 'Content-Type': 'application/json'},
    body: body && JSON.stringify(body)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
}

export { fetchCall };
