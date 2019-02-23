export default query =>
  fetch(
    `https://api.github.com/search/repositories?q=${query}:javascript&sort=stars&order=desc`
  )
    .then(resp => resp.json())
    .then(resp => resp.items);
