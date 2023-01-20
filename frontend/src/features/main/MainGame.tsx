import React from 'react';
import {
  Grid,
  Container,
  TableBody,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  Box,
} from '@mui/material';
import QuestionItem from '../questionItem/QuestionItem';

const scores = [100, 200, 300, 400, 500];

const themes = ['Theme 1', 'Theme 2', 'Theme 3', 'Theme4', 'Theme5'];

function MainGame(): JSX.Element {
  return (
    <div>
      <Container sx={{ marginTop: '30px' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {themes.map((theme) => (
                <TableRow
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
                        height: 100,
                        backgroundColor: 'primary.dark',
                      }}
                    >
                      {theme}
                    </Box>
                  </TableCell>
                  {scores.map((score) => (
                    <TableCell align="right" sx={{ padding: 0, margin: 0 }}>
                      <Box
                        sx={{
                          borderRight: '1px solid #ced5dd',
                          height: 100,
                          backgroundColor: 'primary.dark',
                          '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: 0.9,
                          },
                        }}
                      >
                        {score}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default MainGame;
