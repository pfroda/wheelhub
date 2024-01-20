import { useData } from '../../context/DataContext';
import logo from '../../assets/img/Logotipo-Vertical-Verde-Alta.png';
import './consent.scss';

function Consent() {
  const { updateFormData, formData } = useData();

  return (
    <div className="Consent">
      <div className="form-logo">
        <img src={logo} alt="wheelhub-logo" className="logo" />
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
            checked={formData.consent}
            onChange={(e) => updateFormData('consent', e.target.checked)}
          />
          <label htmlFor="consent" id="consent-label">
            Confirma que es mayor de edad, y acepta el tratamiento de sus datos
            según la política de protección de datos vigente
          </label>
        </div>
      </div>
    </div>
  );
}

export default Consent;
