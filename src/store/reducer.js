import {
  GET_REPOSITORIES,
  CHANGE_MYLIST_STATUS
} from './action';

const initialState = {
  userData: [
    {
      id: '1',
      name: 'MyJSProgram',
      language: 'JavaScript',
      langSearch: 'javascript',
      querySearch: 'cms',
      description: 'react + nodejs',
      stargazers_count: '123',
      myList: false,
    },
    {
      id: '2',
      name: 'MyRubyProject',
      language: 'JavaScript',
      langSearch: 'javascript',
      querySearch: 'cms',
      description: 'angular + rubyOnRails',
      stargazers_count: '321',
      myList: false,
    },
    {
      id: '3',
      name: 'BestJS',
      language: 'JavaScript',
      langSearch: 'javascript',
      querySearch: 'cms',
      description: 'vanile js',
      stargazers_count: '444',
      myList: false,
    },
    {
      id: '4',
      name: 'BestJS',
      language: 'JavaScript',
      langSearch: 'javascript',
      querySearch: 'cms',
      description: 'vanile js',
      stargazers_count: '444',
      myList: false,
      },
  ],
};

export default function githubApp(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORIES:
      return { ...state, userData: action.payload };
    case CHANGE_MYLIST_STATUS:
      return {
        ...state,
        userData: state.userData.map(item =>
          (item.id === action.payload)
           ? {...item, myList: !item.myList }
           : item
        ),
      };
    default:
      return state;
  }
}
