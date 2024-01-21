import { useData } from '../../context/DataContext';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/img/Logotipo-Vertical-Verde-Alta.png';
import './consent.scss';

function Consent() {
  const { updateFormData, formData } = useData();
  const { t, i18n } = useTranslation(['consent']);

  return (
    <div className="Consent">
      <div className="form-logo">
        <img src={logo} alt="wheelhub-logo" className="logo" />
      </div>
      <div className="form-instructions">
        <h4>{t('title')}</h4>
        <p>{t('first')}</p>
        <p>{t('second')}</p>
        <p>{t('third')}</p>
        <div className="form-checkbox">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={(e) => updateFormData('consent', e.target.checked)}
          />
          <label htmlFor="consent" id="consent-label">
            {t('checkbox')}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Consent;
