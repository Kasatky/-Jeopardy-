export type QuestionItem = {

  id: number;
  question: string;
  answer: string;
  value: number;
};

export type QuestionsState = {
  list: QuestionItem[];
  error: Error | null;
};

export type ThemeItem = {
  id: number;
  title: string;
  questions: QuestionItem[];
};

export type ThemeState = {
  list: ThemeItem[];
  error: Error | null;
};

// const initialState: QuestionsState = {
//     list: [],
//     error: null,
// }
const allThemes = (async (): Promise<any> => {
  const response = await fetch('/api/questions');
  const allThemes: ThemeItem[] = await response.json();
  return allThemes;
})();

const initialThemeState: ThemeState = {
  list: [],
  error: null,
};

export type QuestionsAction = {
  type: 'Get_Questions';
  payload: QuestionItem[];
};
export type ThemeAction = { type: 'Get_Themes'; payload: ThemeItem[] };

const questionReducer = (
  state: ThemeState = initialThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'Get_Themes': {
      return {
        ...state,
        list: action.payload,
      };
    }

    default: {
      return state;

    }
  }
};

export default questionReducer;
