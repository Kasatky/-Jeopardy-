import React from 'react';
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

const questions = [
  {
    question: 'Question 1',
    value: 100,
  },
  {
    question: 'Question 2',
    value: 200,
  },
  {
    question: 'Question 3',
    value: 300,
  },
  {
    question: 'Question 4',
    value: 400,
  },
  {
    question: 'Question 5',
    value: 500,
  },
];

const themes = ['Theme 1', 'Theme 2', 'Theme 3'];

function MainGame(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
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
                      color: '#000',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '30px',
                    }}
                  >
                    {theme}
                  </Box>
                </TableCell>
                {questions.map((item) => (
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
                      <Button
                        onClick={handleOpen}
                        sx={{
                          color: '#000',
                          display: 'flex',
                          width: '100%',
                          height: '100%',
                          fontSize: '30px',
                        }}
                      >
                        {item.value}
                      </Button>
                    </Box>

                    <QuestionItem
                      open={open}
                      question={item.question}
                      value={item.value}
                      handleClose={handleClose}
                    />

                    {/* <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {item.value}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {item.question}
                        </Typography>
                      </Box>
                    </Modal> */}
                  </TableCell>
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
