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
          placeholder="Wheel Hub"
          onChange={(e) => updateFormData('username', e.target.value)}
          value={formData.username}
        />
        <div className="password-content">
          <label htmlFor="password">Crea tu contraseña</label>
          <div className="password-box">
            <input
              type={visiblePassword.password ? 'text' : 'password'}
              placeholder="Crea tu contraseña"
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
          <label htmlFor="passwordConfirm">Repite tu contraseña</label>
          <div className="password-box">
            <input
              type={visiblePassword.passwordConfirm ? 'text' : 'password'}
              placeholder="Repite tu contraseña"
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
        <div className="hint-content">
          <p>
            También puedes crear una pista que te ayude a recordar tu contraseña
          </p>
          <label htmlFor="hint">
            Crea tu pista para recordar tu contraseña (opcional)
          </label>
          <input
            type="text"
            placeholder="Introduce tu pista"
            onChange={(e) => updateFormData('hint', e.target.value)}
            value={formData.hint}
          />
        </div>
      </div>
    </form>
  );
}

export default UserInfo;
