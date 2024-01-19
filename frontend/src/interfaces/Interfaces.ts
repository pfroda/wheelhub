export interface DataContextType {
  formData: UserData;
  updateFormData: (field: keyof UserData, value: string) => void;
  postFormData: () => Promise<void>;
}

export interface UserData {
  consent: boolean;
  username: string;
  password: string;
  passwordConfirm: string;
  hint: string;
}
