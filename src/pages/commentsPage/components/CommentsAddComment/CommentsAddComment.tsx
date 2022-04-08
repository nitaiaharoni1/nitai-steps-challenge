import { Button, TextField } from '@mui/material';
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
    <div className={styles.filtersWrapper}>
      <div className={styles.inputsWrapper}>
        <TextField
          className={styles.input}
          id={InputsTypes.name}
          label='Name'
          onChange={handleInputChanged}
          required
          value={name}
        />

        <TextField
          className={styles.input}
          id={InputsTypes.body}
          label='Body'
          maxRows={3}
          multiline
          onChange={handleInputChanged}
          required
          value={body}
        />

        <TextField
          autoComplete='email'
          className={styles.input}
          error={!isEmailValid && !!email}
          id={InputsTypes.email}
          label='Email'
          onChange={handleInputChanged}
          required
          value={email}
        />
      </div>

      <div className={styles.buttonsWrapper}>
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
      </div>
    </div>
  );
};

