import Success from '../../assets/img/success.png';
import './confirmation.scss';
import { useTranslation } from 'react-i18next';

function Confirmation() {
  const { t } = useTranslation(['confirmation']);
  return (
    <div className="Confirmation">
      <div className="confirmation-image">
        <img src={Success} alt="logo" />
      </div>
      <div className="confirmation-content">
        <h2>{t('title')}</h2>
        <p>{t('description')}</p>
      </div>
    </div>
  );
}

export default Confirmation;
