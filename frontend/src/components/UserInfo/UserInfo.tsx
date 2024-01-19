function UserInfo() {
  return (
    <div className="UserInfo">
      <label htmlFor="user">Crea tu usuario</label>
      <input type="text" placeholder="Wheel Hub" />
      <div className="password-content">
        <label htmlFor="password">Crea tu contraseña</label>
        <input type="password" placeholder="Crea tu contraseña" />
        <label htmlFor="password">Repite tu contraseña</label>
        <input type="password" placeholder="Repite tu contraseña" />
      </div>
    </div>
  );
}

export default UserInfo;
