import { useData } from '../../context/DataContext';
import { useState } from 'react';
import './userinfo.scss';
import eyeOpened from '../../assets/icons/icon_eye.svg';
import eyeClosed from '../../assets/icons/icon_eyeclosed.svg';

function UserInfo() {
  const { updateFormData, formData } = useData();
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
        <label htmlFor="username">Crea tu usuario</label>
        <input
          type="text"
          placeholder="Introduce tu usuario"
          onChange={(e) => updateFormData('username', e.target.value)}
          value={formData.username}
        />
        <div className="password-content">
          <div className="password-box">
            <label htmlFor="password">Crea tu contraseña</label>
            <div className="password-input">
              <input
                type={visiblePassword.password ? 'text' : 'password'}
                placeholder="Crea tu contraseña"
                minLength={8}
                maxLength={24}
                pattern=".{8,24}"
                onChange={(e) => updateFormData('password', e.target.value)}
                value={formData.password}
              />
              <img
                src={visiblePassword.password ? eyeClosed : eyeOpened}
                alt=""
                onClick={() => togglePasswordVisibility('password')}
              />
            </div>
          </div>
          <div className="password-box">
            <label htmlFor="passwordConfirm">Repite tu contraseña</label>
            <div className="password-input">
              <input
                type={visiblePassword.passwordConfirm ? 'text' : 'password'}
                placeholder="Repite tu contraseña"
                minLength={8}
                maxLength={24}
                pattern=".{8,24}"
                onChange={(e) =>
                  updateFormData('passwordConfirm', e.target.value)
                }
                value={formData.passwordConfirm}
              />
              <img
                src={visiblePassword.passwordConfirm ? eyeClosed : eyeOpened}
                alt=""
                onClick={() => togglePasswordVisibility('passwordConfirm')}
              />
            </div>
          </div>
        </div>
        <div className="hint-content password-box">
          <p>
            También puedes crear una pista que te ayude a recordar tu contraseña
          </p>
          <label htmlFor="hint">
            Crea tu pista para recordar tu contraseña (opcional)
          </label>
          <input
            type="text"
            placeholder="Introduce tu pista"
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
