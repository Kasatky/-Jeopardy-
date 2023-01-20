import { combineReducers } from 'redux';

export type RootState = {
  // users: UserState
};

const rootReducer = combineReducers<RootState>({
  // users: userReducer
});

export default rootReducer;
