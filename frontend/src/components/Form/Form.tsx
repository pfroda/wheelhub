import Consent from '../Consent/Consent';
import UserInfo from '../UserInfo/UserInfo';
import Confirmation from '../Confirmation/Confirmation';
import Button from '../Button/Button';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useError } from '../../context/ErrorContext';
import ClipLoader from 'react-spinners/ClipLoader';
import { useTranslation } from 'react-i18next';
import './form.scss';

interface FormProps {
  contentIndex: number;
  setContentIndex: (arg0: number) => void;
}

function Form({ contentIndex, setContentIndex }: FormProps) {
  const content = [<Consent />, <UserInfo />, <Confirmation />];

  const { validateInputs } = useError();
  const { formData, postFormData, resetFormData } = useData();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [postError, setPostError] = useState<Error | null>(null);

  const { t } = useTranslation(['button']);

  const handleSubmit = async () => {
    // Data check
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
      setSubmitting(true);
      await postFormData();
      setPostError(null);
    } catch (err) {
      console.log('Error submitting data', err);
      setPostError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setSubmitting(false);
      resetFormData();
      setContentIndex(contentIndex + 1);
    }
  };

  return (
    <div className="Form">
      <div className="form-content">{content[contentIndex]}</div>
      <div className="form-buttons">
        <div className="button-box">
          {contentIndex > 0 && (
            <Button
              buttonText={t('back')}
              buttonStyle="back-button"
              onButtonClick={() => setContentIndex(contentIndex - 1)}
            />
          )}
        </div>

        <div className="button-box">
          <div className="fader-box">
            {contentIndex < 2 ? (
              <Button
                buttonText={t('next')}
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
                buttonText={t('start')}
                buttonStyle="return-button"
                onButtonClick={() => window.location.reload()}
              />
            )}
            {submitting && (
              <div className="fader-loader">
                <ClipLoader color="white" size={20} id="spinner" />
              </div>
            )}
            {postError && (
              <div className="post-error">
                <p>{postError.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
