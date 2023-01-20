import React from 'react';
import { Box, Modal, Typography, TableCell, Button } from '@mui/material';
import { Item } from '../main/MainGame';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type QuestionItemProps = {
  item: Item;
};

function QuestionItem({ item }: QuestionItemProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);

  return (
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.value}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {item.question}
          </Typography>
        </Box>
      </Modal>
    </TableCell>
  );
}

export default QuestionItem;
