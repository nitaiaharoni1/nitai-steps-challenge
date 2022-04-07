import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';

import styles from './CommentsAddComment.module.scss';

import colors from 'themes/colors.module.scss';

enum InputsTypes {
  title = 'title',
  body = 'body',
  email = 'email',
}

export const CommentsAddComment: FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');

  const isSubmitDisabled = !title || !body || !email;

  const handleInputChanged = (e: ChangeEvent<any>) => {
    const { id, value } = e.target;
    switch (id) {
      case InputsTypes.title:
        setTitle(value);
        break;
      case InputsTypes.body:
        setBody(value);
        break;
      case InputsTypes.email:
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleClear = (e: any) => {
    e.preventDefault();
    setTitle('');
    setBody('');
    setEmail('');
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(title, body, email);
  };

  return (
    <Box
      autoComplete='off'
      className={styles.filters}
      component='form'
      noValidate
    >
      <div className={styles.inputs}>
        <TextField
          id={InputsTypes.title}
          label='Title'
          onChange={handleInputChanged}
          required
          sx={{ m: 1 }}
          value={title}
        />

        <TextField
          id={InputsTypes.body}
          label='Body'
          maxRows={3}
          multiline
          onChange={handleInputChanged}
          required
          sx={{
            m: 1,
            width: 400,
          }}
          value={body}
        />

        <TextField
          id={InputsTypes.email}
          label='Email'
          onChange={handleInputChanged}
          required
          sx={{ m: 1 }}
          value={email}
        />
      </div>

      <Button
        disabled={isSubmitDisabled}
        onClick={handleSubmit}
        variant='contained'
      >
        Send
      </Button>

      <Button
        onClick={handleClear}
        sx={{
          marginLeft: '1rem',
          backgroundColor: colors.darkGray,
        }}
        variant='contained'
      >
        Clear
      </Button>
    </Box>
  );
};

