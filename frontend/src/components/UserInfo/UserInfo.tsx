import { useData } from '../../context/DataContext';
import eyeOpened from '../../assets/icons/icon_eye.svg';
import eyeClosed from '../../assets/icons/icon_eyeclosed.svg';
import { useState } from 'react';

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
            onChange={(e) => updateFormData('passwordConfirm', e.target.value)}
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
  );
}

export default UserInfo;
