import Consent from '../Consent/Consent';
import UserInfo from '../UserInfo/UserInfo';
import { useEffect, useState } from 'react';
import { useData } from '../../context/DataContext';
import FadeLoader from 'react-spinners/FadeLoader';

function Form() {
  const [index, setIndex] = useState<number>(0);
  const { formData, postFormData } = useData();

  const content = [<Consent />, <UserInfo />];
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    console.log(index);
    console.log('THIS IS FORM DATA', formData);
  });

  const handleSubmit = async () => {
    if (formData.password !== formData.passwordConfirm) {
      console.log("passwords don't match");
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
    }
  };

  return (
    <div>
      <div className="progress"></div>
      <div className="title">Test frontend Wheel Hub</div>
      <div className="form-content">{content[index]}</div>
      <div className="form-buttons">
        <div className="back-button">
          {index > 0 && (
            <button type="button" onClick={() => setIndex(index - 1)}>
              Atrás
            </button>
          )}
        </div>

        <div className="forward-button">
          <button
            disabled={!formData.consent}
            type="button"
            onClick={() => {
              if (index < 1) {
                setIndex(index + 1);
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
