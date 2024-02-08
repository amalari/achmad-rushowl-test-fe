import { useCallback, useMemo } from 'react';
import { validateEmail } from '../commons/emailValidation';
import { useInput } from '../commons/useInput';
import axios from 'axios';

export const useLogin = () => {
  const {
    value: email,
    onChange: onChangeEmail,
    isValid: isValidEmail,
    isDirty: isDirtyEmail,
  } = useInput({
    initialValue: '',
    validation: (val) => validateEmail(val),
  });
  const {
    value: password,
    onChange: onChangePassword,
    isValid: isValidPassword,
    isDirty: isDirtyPassword,
  } = useInput({
    initialValue: '',
    validation: (val) => val !== '',
  });
  const allowLogin = useMemo(
    () => isValidEmail && isDirtyEmail && isValidPassword && isDirtyPassword,
    [isValidEmail, isDirtyEmail, isValidPassword, isDirtyPassword]
  );

  const handleSubmit = useCallback(async () => {
    if (!allowLogin) {
      alert('Please enter valid email and password');
      return;
    }

    try {
      const response = await axios.post('https://www.sample.app/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      alert('Login successful')
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error')
    }
  }, [email, password]);

  return {
    onChangeEmail,
    isDirtyEmail,
    isValidEmail,
    onChangePassword,
    isDirtyPassword,
    isValidPassword,
    allowLogin,
    handleSubmit,
  };
};
