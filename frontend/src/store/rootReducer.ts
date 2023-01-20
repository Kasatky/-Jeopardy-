import { combineReducers } from 'redux';
import questionReducer, {
  QuestionsState,
  ThemeState,
} from './questionsReducer';

export type RootState = {
  // users: UserState
  themes: ThemeState;
};

const rootReducer = combineReducers<RootState>({
  // users: userReducer
  themes: questionReducer,
});

export default rootReducer;
