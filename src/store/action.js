
import axios from 'axios';
export const GET_REPOSITORIES = 'GET_REPOSITORIES';

export const getRepositoriesAction = () => dispatch => axios({url:`https://api.github.com/search/repositories?q=cms+language:javascript`, method: 'get', headers: { Authorization: 'Basic -u kolesnikovtgn:93e92c2a74aa92e55cc5bfd9b3728901cf2258bb' } })
  .then((response) => {
    response.data.items.forEach(el => el.myList = false);
  dispatch({
    type: 'GET_REPOSITORIES',
    payload: response.data,
  });
});

