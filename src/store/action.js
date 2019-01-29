export const GET_REPOSITORIES = 'GET_REPOSITORIES';

export const getRepositoriesAction = () => dispatch => fetch({
  // eslint-disable-line
  method: 'GET',
  url: `https://api.github.com/search/repositories?q=cms+language:javascript`,
  headers: { Authorization: 'Basic -u kolesnikovtgn:93e92c2a74aa92e55cc5bfd9b3728901cf2258bb' },
}).then((data) => {
  // data.forEach(el => el.myList = false);

  const userData = JSON.parse(JSON.stringify(data));
  dispatch({
    type: 'GET_REPOSITORIES',
    payload: userData,
  });
});
