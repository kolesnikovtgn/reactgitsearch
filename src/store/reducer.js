import {
  GET_REPOSITORIES
} from './action';

const initialState = {
  userData: [
    {
      id: '1',
      name: 'MyJSProgram',
      description: 'react + nodejs',
      stargazers_count: '123',
      myList: false,
    },
    {
      id: '2',
      name: 'MyRubyProject',
      description: 'angular + rubyOnRails',
      stargazers_count: '321',
      myList: false,
    },
    {
      id: '3',
      name: 'BestJS',
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
    default:
      return state;
  }
}