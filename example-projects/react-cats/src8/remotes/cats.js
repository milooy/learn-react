export async function getCats() {
  return await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=5&page=0"
  )
    .then((res) => res.json())
    .then((data) => data);
}
