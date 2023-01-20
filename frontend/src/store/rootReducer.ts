import { combineReducers } from 'redux';
import questionReducer, { QuestionsState } from './questionsReducer';

export type RootState = {
  // users: UserState
  questions: QuestionsState, 
};

const rootReducer = combineReducers<RootState>({
  // users: userReducer
  questions: questionReducer
});

export default rootReducer;
