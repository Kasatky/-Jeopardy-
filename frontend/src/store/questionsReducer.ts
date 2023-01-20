export type QuestionItem = {
    id: number;
    question: string;
    answer: string;
    value: number;
    themeId: number;
}

export type QuestionsState = {
    list: QuestionItem[],
    error: Error | null,
}


const initialState: QuestionsState = {
    list: [],
    error: null,
}

export type QuestionsAction = { type: 'Get_Questions', payload: QuestionItem[] }


const questionReducer = (state: QuestionsState = initialState, action: QuestionsAction): QuestionsState => {
    switch (action.type) {
        case 'Get_Questions': {
            return {
                ...state,
                list: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default questionReducer;