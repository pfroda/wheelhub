import Consent from '../Consent/Consent';
import UserInfo from '../UserInfo/UserInfo';
import Confirmation from '../Confirmation/Confirmation';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import FadeLoader from 'react-spinners/FadeLoader';

function Form() {
  const content = [<Consent />, <UserInfo />, <Confirmation />];
  const [contentIndex, setContentIndex] = useState<number>(0);

  const { formData, postFormData, resetFormData } = useData();
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
        <div className="back-button">
          {contentIndex > 0 && (
            <button
              type="button"
              onClick={() => setContentIndex(contentIndex - 1)}
            >
              Atrás
            </button>
          )}
        </div>

        <div className="forward-button">
          <button
            disabled={!formData.consent || submitting}
            type="button"
            onClick={() => {
              if (contentIndex < 1) {
                setContentIndex(contentIndex + 1);
              } else {
                handleSubmit();
              }
            }}
          >
            Siguiente!
          </button>
          {submitting && (
            <FadeLoader
              color="green"
              // loading={loading}
              // cssOverride={override}
              // size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
