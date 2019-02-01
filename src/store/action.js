import axios from 'axios';
export const GET_REPOSITORIES = 'GET_REPOSITORIES';
export const CHANGE_MYLIST_STATUS = 'CHANGE_MYLIST_STATUS';

export const getRepositoriesAction = (data) => dispatch => axios(
    {   url:`https://api.github.com/search/${data.repositories}?q=${data.query}+language:${data.language}`,
        method: 'get',
        headers: { Authorization: 'Basic -u kolesnikovtgn:93e92c2a74aa92e55cc5bfd9b3728901cf2258bb' }
    })
    .then((response) => {
        response.data.items.forEach(el => { el.myList = false; el.langSearch = data.language; el.querySearch = data.query; });
    dispatch({
        type: 'GET_REPOSITORIES',
        payload: response.data.items,
    });
    });
