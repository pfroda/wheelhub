import { createContext, useContext, useState } from 'react';

const DataContext = createContext({});

export const useData = () => {
  const context = useContext(DataContext);
};

function DataProvider({ children }) {
  const [formData, setFormData] = useState({
    consent: false,
    username: '',
    password: '',
    passwordConfirmation: '',
    hint: '',
  });

  const updateFormData = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const postFormData = () => {};

  return (
    <DataContext.Provider value={{ formData, updateFormData, postFormData }}>
      {children}
    </DataContext.Provider>
  );
}
