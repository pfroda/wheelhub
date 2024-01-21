import Success from '../../assets/img/success.png';
import './confirmation.scss';

function Confirmation() {
  return (
    <div className="Confirmation">
      <div className="confirmation-image">
        <img src={Success} alt="logo" />
      </div>
      <div className="confirmation-content">
        <h2>La cuenta se creó correctamente!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eum
          nobis error id ut fugit aliquid fuga animi, placeat officiis
          laudantium quibusdam asperiores. Quisquam dolorum, labore quod id
          adipisci nesciunt.
        </p>
      </div>
    </div>
  );
}

export default Confirmation;
