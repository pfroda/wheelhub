import Consent from '../Consent/Consent';
import UserInfo from '../UserInfo/UserInfo';
import Confirmation from '../Confirmation/Confirmation';
import Button from '../Button/button';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import ClipLoader from 'react-spinners/ClipLoader';
import './form.scss';

function Form() {
  const content = [<Consent />, <UserInfo />, <Confirmation />];
  const [contentIndex, setContentIndex] = useState<number>(2);

  const { formData, postFormData, resetFormData } = useData();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    console.log(contentIndex);
    console.log('THIS IS FORM DATA', formData);
  });

  const handleSubmit = async () => {
    if (formData.password !== formData.passwordConfirm) {
      console.log("passwords don't match");
      return;
    }

    if (!formData.password) {
      return;
    }

    if (!formData.username) {
      return;
    }

    console.log('Submitting!');
    setSubmitting(true);
    try {
      await postFormData();
      console.log('posted data!');
    } catch (err) {
      console.log('Error submitting data', err);
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
