import { useData } from '../../context/DataContext';
import { useError } from '../../context/ErrorContext';
import { useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useTranslation } from 'react-i18next';
import eyeOpened from '../../assets/icons/icon_eye.svg';
import eyeClosed from '../../assets/icons/icon_eyeclosed.svg';
import './userinfo.scss';

function UserInfo() {
  const { updateFormData, formData } = useData();
  const { errors } = useError();

  const { t } = useTranslation(['form']);

  const [visiblePassword, setVisiblePassword] = useState<{
    [key: string]: boolean;
  }>({
    password: false,
    passwordConfirm: false,
  });

  const togglePasswordVisibility = (field: string) => {
    setVisiblePassword((prevVisibility) => ({
      ...prevVisibility,
      [field]: !prevVisibility[field],
    }));
  };

  return (
    <form>
      <div className="UserInfo">
        <label htmlFor="username">{t('user')}</label>
        <input
          type="text"
          placeholder={t('user')}
          onChange={(e) => updateFormData('username', e.target.value)}
          value={formData.username}
          required
        />
        <div className="info-error">
          <p>{errors.username}</p>
        </div>
        <div className="password-content">
          <div className="password-box">
            <label htmlFor="password">{t('password')}</label>
            <div className="password-input">
              <input
                type={visiblePassword.password ? 'text' : 'password'}
                placeholder={t('password')}
                minLength={8}
                maxLength={24}
                pattern="(?=.*\d)(?=.*[A-Z]).{8,24}"
                onChange={(e) => updateFormData('password', e.target.value)}
                value={formData.password}
                required
              />

              <img
                src={visiblePassword.password ? eyeClosed : eyeOpened}
                alt=""
                onClick={() => togglePasswordVisibility('password')}
              />
            </div>
            <div className="password-strength">
              <PasswordStrengthBar
                password={formData.password}
                shortScoreWord={['']}
                scoreWords={['']}
              />
            </div>
            <div className="info-error">
              <p>{errors.password}</p>
            </div>
          </div>
          <div className="password-box">
            <label htmlFor="passwordConfirm">{t('passwordRepeat')}</label>
            <div className="password-input">
              <input
                type={visiblePassword.passwordConfirm ? 'text' : 'password'}
                placeholder={t('passwordRepeat')}
                minLength={8}
                maxLength={24}
                pattern="(?=.*\d)(?=.*[A-Z]).{8,24}"
                onChange={(e) =>
                  updateFormData('passwordConfirm', e.target.value)
                }
                value={formData.passwordConfirm}
                required
              />
              <img
                src={visiblePassword.passwordConfirm ? eyeClosed : eyeOpened}
                alt=""
                onClick={() => togglePasswordVisibility('passwordConfirm')}
              />
            </div>
            <div className="password-strength">
              <PasswordStrengthBar
                password={formData.passwordConfirm}
                shortScoreWord={['']}
                scoreWords={['']}
              />
            </div>
          </div>
        </div>
        <div className="hint-content password-box">
          <p>{t('hintDescription')}</p>
          <label htmlFor="hint">{t('hintLabel')}</label>
          <input
            type="text"
            placeholder={t('hintInput')}
            maxLength={60}
            onChange={(e) => updateFormData('hint', e.target.value)}
            value={formData.hint}
          />
          <p id="char">{formData.hint.length}/60</p>
        </div>
      </div>
    </form>
  );
}

export default UserInfo;
