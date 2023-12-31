import { useState } from "react";
import { Modal, Stack, Box } from "@mui/material";
import { Button, Typography, Input, Textarea } from "@mui/joy";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};

export const CreateBlogModal = ({ open, onClose, onSubmit }) => {

  const [ title, setTitle ] = useState('');
  const [ caption, setCaption ] = useState('');
  const [ image, setImage ] = useState('');

  const handleClose = () => {
    setTitle('');
    setCaption('');
    setImage('');
    onClose();
  }

  const handleSubmit = () => {
    const data = {
      title,
      caption,
      image
    }

    onSubmit(data);
  }

  return (
    <Modal open={open}>
      <Box sx={style}>
        <Stack direction='column' justifyContent='space-between' spacing={3}>
          <Typography level='h3'> Create Blog </Typography>

          <Stack direction='column' spacing={2}>
            <Input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea placeholder='Caption' value={caption} minRows={3} maxRows={4} onChange={(e) => setCaption(e.target.value)} />
            <Input placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} />
          </Stack>

          <Stack direction='row' justifyContent='space-between'>
            <Button variant='solid' color='neutral' onClick={handleClose}> Cancel </Button>
            <Button variant='solid' color='success' onClick={handleSubmit}> Submit </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  )

}