import React, { useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  TableCell,
  Button,
  TextField,
} from '@mui/material';
import { QuestionItem as Item } from '../../store/questionsReducer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type QuestionItemProps = {
  item: Item;
};

const answer = 'something';
//сделать score в базу данных

function QuestionItem({ item }: QuestionItemProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [isAnswerRight, setIsAnswerRight] = useState<boolean>();
  const [userAnswer, setUserAnswer] = useState('');

  //это надо заменить на score из БД
  const [score, setScore] = useState(0);

  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  const sendAnswer = (q: Item): void => {
    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      setIsAnswerRight(true);
      setScore((prevValue) => prevValue + item.value);
    } else {
      setIsAnswerRight(false);
      setScore((prevValue) => prevValue - item.value);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setUserAnswer(event.target.value);
  };

  return (
    <TableCell align="right" sx={{ padding: 0, margin: 0 }}>
      <Box
        sx={{
          borderRight: '1px solid #ced5dd',
          height: 150,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: 0.9,
          },
        }}
      >
        {
          <Button
            onClick={handleOpen}
            sx={{
              color: '#000',
              display: 'flex',
              width: '100%',
              height: '100%',
              fontSize: '30px',
            }}
            disabled={isAnswerRight !== undefined}
          >
            {item.value}
          </Button>
        }
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: '24px' }}
          >
            {item.question}
          </Typography>
          <TextField
            onChange={handleInputChange}
            id="filled-basic"
            label="Ответ"
            variant="filled"
            sx={{ width: '100%', margin: '20px 0' }}
          />
          <br />
          <Button onClick={(): void => sendAnswer(item)} variant="contained">
            Ответить
          </Button>
          {isAnswerRight === undefined ? (
            ''
          ) : (
            <div style={{ fontSize: '22px' }}>
              {!isAnswerRight ? (
                <p>Неверно! Правильный ответ: {item.answer}</p>
              ) : (
                <p>Верно!</p>
              )}
            </div>
          )}
        </Box>
      </Modal>
    </TableCell>
  );
}

export default QuestionItem;
