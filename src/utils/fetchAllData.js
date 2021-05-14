export default function fetchAllData() {
  const url = "https://rickandmortyapi.com/api/character";
  return fetch(url).then((response) => response.json());
}
