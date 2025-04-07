import PropTypes from 'prop-types';
import MitenMenee from './MitenMenee';

// return, ei funktio vaan avainsana. muista <></>
const Greeting = (props) => {
  function handleButtonClick() {
    alert('Klikki');
  }

  return (
    <>
      <h5>Moi, {props.name}</h5>
      <MitenMenee />
      <button onClick={handleButtonClick}>nappi</button>
    </>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
