import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, FC, useContext, useState } from 'react';

import styles from './CommentsAddComment.module.scss';

import { CommentsContext } from 'context';
import colors from 'themes/colors.module.scss';
import { validateEmail } from 'utils/validateEmail';

enum InputsTypes {
  name = 'name',
  body = 'body',
  email = 'email',
}

export const CommentsAddComment: FC = () => {
  const { addComment } = useContext(CommentsContext);

  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');

  const isEmailValid = validateEmail(email);
  const isSubmitDisabled = !name || !body || !email || !isEmailValid;

  const handleInputChanged = (e: ChangeEvent<any>) => {
    const { id, value } = e.target;
    switch (id) {
      case InputsTypes.name:
        setName(value);
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

  const handleClear = () => {
    setName('');
    setBody('');
    setEmail('');
  };

  const handleSubmit = () => {
    addComment({
      name,
      body,
      email,
    });
    handleClear();
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
          id={InputsTypes.name}
          label='Name'
          onChange={handleInputChanged}
          required
          sx={{ m: 1 }}
          value={name}
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
          autoComplete='email'
          error={!isEmailValid && !!email}
          id={InputsTypes.email}
          label='Email'
          onChange={handleInputChanged}
          required
          sx={{
            m: 1,
            width: 300,
          }}
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

