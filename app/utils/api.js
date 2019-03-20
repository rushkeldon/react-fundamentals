import axios from 'axios';

const api = {
  fetchPopularRepos: (lang) => {
    let encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);
    return axios.get(encodedURI)
      .then((response) => response.data.items)
      .catch((err) => {
        console.error(err);
      });
  }
};

export default api;
