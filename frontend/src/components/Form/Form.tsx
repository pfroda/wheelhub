import Consent from '../Consent/Consent';
import UserInfo from '../UserInfo/UserInfo';
import { useEffect, useState } from 'react';

function Form() {
  const [index, setIndex] = useState<number>(0);
  const [consent, setConsent] = useState<boolean>(false);

  const content = [
    <Consent setConsent={setConsent} consent={consent} />,
    <UserInfo />,
  ];

  // const setContent = () => {
  //   if (index >= 1 || index <= 0) return index;
  // };

  useEffect(() => {
    console.log(index);
    console.log('consent', consent);
  }, [consent]);

  const handleSubmit = () => {
    console.log('Submit!');
  };

  return (
    <div>
      <div className="progress"></div>
      <div className="title">Test frontend Wheel Hub</div>
      <div className="form-content">{content[index]}</div>
      <div className="form-buttons">
        {index > 0 && (
          <button type="button" onClick={() => setIndex(index - 1)}>
            Atrás
          </button>
        )}

        <button
          disabled={!consent}
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
      </div>
    </div>
  );
}

export default Form;
