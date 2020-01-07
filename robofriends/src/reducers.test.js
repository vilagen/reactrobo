import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED 
} from './constants.js';

import * as reducers from './reducers';

// remember that reducers take two things: a state, and an action.
describe('searchRobots', () => {

  const initialStateSearch = {
    searchRobots: ''
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc',
    })).toEqual({ 
      searchField: 'abc' 
    });
  });

});

