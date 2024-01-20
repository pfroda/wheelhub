import { createContext, useContext, useState } from 'react';
import { postUser } from '../services/apiService';
import { DataContextType, UserData } from '../interfaces/Interfaces';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

function DataProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<UserData>({
    consent: false,
    username: '',
    password: '',
    passwordConfirm: '',
    hint: '',
  });

  const updateFormData = (field: keyof UserData, value: string | boolean) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const resetFormData = () => {
    setFormData({
      consent: false,
      username: '',
      password: '',
      passwordConfirm: '',
      hint: '',
    });
  };

  const postFormData = async () => {
    await postUser({
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <DataContext.Provider
      value={{ formData, updateFormData, postFormData, resetFormData }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
