function Consent({ setConsent }) {
  const handleCheckboxClick = (e) => {
    // setConsent(e.target.checkbox);
    // consent = e.target.checked;
    setConsent(e.target.checked);
    console.log('e.target', e.target.checked);
  };

  return (
    <div className="Consent">
      <div className="form-logo">
        <img src="" alt="wheelhub-logo" />
      </div>
      <div className="form-instructions">
        <h4>¿Qué deberá realizar?</h4>
        <p>
          En la primera pestaña, deberá confirmar que es mayor de edad y que
          acepta el tratamiento de sus datos según la política de datos
          vigentes.
        </p>
        <p>
          En la segunda pestaña, deberá crear un usuario, una contraseña y una
          pista para recordar la contraseña (como dato optional)
        </p>
        <p>
          En tercer lugar, deberá visualizarse el mensaje de éxito de creación.
        </p>
        <div className="form-checkbox">
          <input
            type="checkbox"
            name="consent"
            value="consent"
            onChange={handleCheckboxClick}
          />
          <label htmlFor="consent">
            Confirma que es mayor de edad, y acepta el tratamiento de sus datos
            según la política de protección de datos vigente
          </label>
        </div>
      </div>
    </div>
  );
}

export default Consent;
