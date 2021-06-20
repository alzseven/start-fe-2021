function getAPI(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status}`);
  });
}

export default getAPI;
