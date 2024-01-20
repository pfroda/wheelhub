import Consent from '../Consent/Consent';
import UserInfo from '../UserInfo/UserInfo';
import { useEffect, useState, useContext } from 'react';
import { useData } from '../../context/DataContext';

function Form() {
  const [index, setIndex] = useState<number>(0);
  const { formData } = useData();

  const content = [<Consent />, <UserInfo />];

  // const setContent = () => {
  //   if (index >= 1 || index <= 0) return index;
  // };

  useEffect(() => {
    console.log(index);
    console.log('THIS IS FORM DATA', formData);
  });

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
      </div>
    </div>
  );
}

export default Form;
