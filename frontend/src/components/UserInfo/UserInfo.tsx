import { useData } from '../../context/DataContext';

function UserInfo() {
  const { updateFormData, formData } = useData();

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
        <input
          type="password"
          placeholder="Crea tu contraseña"
          onChange={(e) => updateFormData('password', e.target.value)}
          value={formData.password}
        />
        <label htmlFor="passwordConfirm">Repite tu contraseña</label>
        <input
          type="password"
          placeholder="Repite tu contraseña"
          onChange={(e) => updateFormData('passwordConfirm', e.target.value)}
          value={formData.passwordConfirm}
        />
      </div>
    </div>
  );
}

export default UserInfo;
