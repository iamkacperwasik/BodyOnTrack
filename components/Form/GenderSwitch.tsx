import {useBodyInfoStore} from '../../stores/BodyInfo';

const GenderSwitch = () => {
  const {switchGender} = useBodyInfoStore();

  return (
    <div>
      <p>Gender</p>
      <div>
        <button onClick={() => switchGender('M')}>M</button>
        <button onClick={() => switchGender('F')}>F</button>
      </div>
    </div>
  );
};

export default GenderSwitch;
