export interface DataContextType {
  formData: UserData;
  updateFormData: (field: keyof UserData, value: string | boolean) => void;
  postFormData: () => Promise<void>;
  resetFormData: () => void;
}

export interface UserData {
  consent: boolean;
  username: string;
  password: string;
  passwordConfirm: string;
  hint: string;
}

export interface ErrorContextType {
  errors: ErrorData;
  setErrors: (newErrors: ErrorData) => void;
  validateInputs: (field: keyof ErrorData) => void;
}

export interface ErrorData {
  username?: string;
  password?: string;
  passwordConfirm?: string;
}
