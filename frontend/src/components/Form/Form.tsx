import Consent from '../Consent/Consent';
import UserInfo from '../UserInfo/UserInfo';
import Confirmation from '../Confirmation/Confirmation';
import Button from '../Button/button';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import { useError } from '../../context/ErrorContext';
import ClipLoader from 'react-spinners/ClipLoader';
import './form.scss';

interface FormProps {
  contentIndex: number;
  setContentIndex: (arg0: number) => void;
}

function Form({ contentIndex, setContentIndex }: FormProps) {
  const content = [<Consent />, <UserInfo />, <Confirmation />];
  const { validateInputs, errors } = useError();
  const { formData, postFormData, resetFormData } = useData();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    // Primer check
    if (
      !formData.username ||
      !formData.password ||
      formData.password !== formData.passwordConfirm
    ) {
      validateInputs('username');
      validateInputs('password');
      return;
    }

    try {
      console.log('Sumitting! formData', formData);
      setSubmitting(true);
      await postFormData();
    } catch (err) {
      console.log('Error submitting data', err);
      // set error
    } finally {
      setSubmitting(false);
      resetFormData();
      setContentIndex(contentIndex + 1);
    }
  };

  return (
    <div>
      <div className="progress"></div>

      <div className="form-content">{content[contentIndex]}</div>
      <div className="form-buttons">
        <div className="button-box">
          {contentIndex > 0 && (
            <Button
              buttonText="Atrás"
              buttonStyle="back-button"
              onButtonClick={() => setContentIndex(contentIndex - 1)}
            />
          )}
        </div>

        <div className="button-box">
          <div className="fader-box">
            {contentIndex < 2 ? (
              <Button
                buttonText="Siguiente"
                buttonStyle={
                  submitting || !formData.consent
                    ? 'disabled forward-button'
                    : 'forward-button'
                }
                onButtonClick={() => {
                  if (contentIndex < 1) {
                    setContentIndex(contentIndex + 1);
                  } else if (contentIndex >= 2) {
                    setContentIndex(0);
                  } else {
                    handleSubmit();
                  }
                }}
                disabled={!formData.consent || submitting}
              />
            ) : (
              <Button
                buttonText="Voler al inicio"
                buttonStyle="return-button"
                onButtonClick={() => setContentIndex(0)}
              />
            )}
            {submitting && (
              <div className="fader-loader">
                <ClipLoader color="white" size={20} id="spinner" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
