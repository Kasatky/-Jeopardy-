import { combineReducers } from 'redux';
import questionReducer from './questionsReducer';

export type RootState = {
  // users: UserState
};

const rootReducer = combineReducers<RootState>({
  // users: userReducer
  questions: questionReducer
});

export default rootReducer;
