import React, { createContext, useContext, useState } from 'react';
import { useData } from './DataContext';

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

  const isValidPassword = (password: string): boolean => {
    return /^(?=.*\d)(?=.*[A-Z]).{8,24}$/.test(password);
  };

  const validateInputs = async (field: keyof Errors) => {
    let error: string | undefined = undefined;

    switch (field) {
      case 'username':
        if (!formData.username) error = 'Introduce un usuario';
        break;

      case 'password':
        if (!formData.password) error = 'Introduce una contraseña';
        if (!isValidPassword(formData.password))
          error = 'Mínimo 8 caracteres con un número y una mayúscula';
        if (
          formData.password &&
          isValidPassword(formData.password) &&
          formData.password != formData.passwordConfirm
        )
          error = 'Las contraseñas no coinciden';
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
