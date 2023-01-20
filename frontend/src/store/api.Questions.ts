import { QuestionItem } from "./questionsReducer"

export async function getQuestions(): Promise<QuestionItem[]> {
	return await (await fetch('/api/questions')).json();
}