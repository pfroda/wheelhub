import React, { createContext, useContext, useState } from 'react';
import { useData } from './DataContext';
import { useTranslation } from 'react-i18next';

interface Errors {
  username?: string;
  password?: string;
  passwordConfirm?: string;
}

interface ErrorContextType {
  errors: Errors;
  setErrors: (newErrors: Errors) => void;
  validateInputs: (field: keyof Errors) => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [errors, setErrors] = useState<Errors>({});
  const { formData } = useData();
  const { t } = useTranslation(['errors']);

  const isValidPassword = (password: string): boolean => {
    return /^(?=.*\d)(?=.*[A-Z]).{8,24}$/.test(password);
  };

  const validateInputs = async (field: keyof Errors) => {
    let error: string | undefined = undefined;

    switch (field) {
      case 'username':
        if (!formData.username) error = t('username');
        break;

      case 'password':
        if (!formData.password) error = t('password');
        if (!isValidPassword(formData.password)) error = t('passwordType');
        if (
          formData.password &&
          isValidPassword(formData.password) &&
          formData.password != formData.passwordConfirm
        )
          error = t('passwordMatch');
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  return (
    <ErrorContext.Provider value={{ errors, setErrors, validateInputs }}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorProvider;
