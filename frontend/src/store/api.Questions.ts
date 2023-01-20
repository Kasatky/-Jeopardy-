import { QuestionItem } from "./questionsReducer";

export async function getQuestions(): Promise<QuestionItem[]> {
  const response = await fetch("/api/questions");
  const data: QuestionItem[] = await response.json();
  return data;
}
