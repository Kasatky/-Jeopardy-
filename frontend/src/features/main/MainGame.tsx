import React, { useEffect } from 'react';
import {
  Container,
  TableBody,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  Box,
  Button,
} from '@mui/material';
import QuestionItem from '../questionItem/QuestionItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { ThemeAction, ThemeItem } from '../../store/questionsReducer';

export type Item = {
  question: string;
  value: number;
};

// const questions1: Item[] = [
//   {
//     question: 'Question 1-1',
//     value: 100,
//   },
//   {
//     question: 'Question 1-2',
//     value: 200,
//   },
//   {
//     question: 'Question 1-3',
//     value: 300,
//   },
//   {
//     question: 'Question 1-4',
//     value: 400,
//   },
//   {
//     question: 'Question 1-5',
//     value: 500,
//   },
// ];
// const questions1: Item[] = [
//   {
//     question: 'Question 1-1',
//     value: 100,
//   },
//   {
//     question:
//       'Question 1-2Question 1-2Question 1-2Question 1-2Question 1-2Question 1-2Question 1-2Question 1-2Question 1-2Question 1-2',
//     value: 200,
//   },
//   {
//     question: 'Question 1-3',
//     value: 300,
//   },
//   {
//     question: 'Question 1-4',
//     value: 400,
//   },
//   {
//     question: 'Question 1-5',
//     value: 500,
//   },
// ];

// const questions2: Item[] = [
//   {
//     question: 'Question 2-1',
//     value: 100,
//   },
//   {
//     question: 'Question 2-2',
//     value: 200,
//   },
//   {
//     question: 'Question 2-3',
//     value: 300,
//   },
//   {
//     question: 'Question 2-4',
//     value: 400,
//   },
//   {
//     question: 'Question 2-5',
//     value: 500,
//   },
// ];

// const questions3: Item[] = [
//   {
//     question: 'Question 3-1',
//     value: 100,
//   },
//   {
//     question: 'Question 3-2',
//     value: 200,
//   },
//   {
//     question: 'Question 3-3',
//     value: 300,
//   },
//   {
//     question: 'Question 3-4',
//     value: 400,
//   },
//   {
//     question: 'Question 3-5',
//     value: 500,
//   },
// ];

// const themes = [
//   { id: 1, title: 'Россия' },
//   { id: 2, title: 'Странное' },
//   { id: 3, title: 'Англо-русский словарь' },
// ];

function MainGame(): JSX.Element {
  const themes = useSelector((state: RootState) => state.themes.list);
  const dispatch = useDispatch();

  // const allThemes = (async (): Promise<any> => {
  //   const response = await fetch('/api/questions');
  //   const allThemes: ThemeItem[] = await response.json();
  //   return allThemes;
  // })();

  useEffect(async (): Promise<void> => {
    const response = await fetch('/api/questions');
    const allThemes: ThemeItem[] = await response.json();
    const action: ThemeAction = { type: 'Get_Themes', payload: allThemes };
    dispatch(action);
  }, []);
  console.log(themes);

  return (
    <Container sx={{ marginTop: '50px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {themes.map((theme: ThemeItem) => (
              <TableRow
                key={theme.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ padding: 0, margin: 0 }}
                >
                  <Box
                    sx={{
                      borderRight: '1px solid #ced5dd',
                      height: 150,
                      backgroundColor: 'primary.dark',
                      color: '#000',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '30px',
                    }}
                  >
                    {theme.title}
                  </Box>
                </TableCell>
                {theme.questions.map((item) => (
                  <QuestionItem item={item} />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MainGame;
