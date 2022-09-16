import {useBodyInfoStore} from '../../stores/BodyInfo';

const GenderSwitch = () => {
  const {gender, switchGender} = useBodyInfoStore();

  const is_male = gender === 'M';

  return (
    <div>
      <p>Gender</p>
      <div className='flex gap-2'>
        <button className={is_male ? 'underline' : ''} onClick={() => switchGender('M')}>
          M
        </button>
        <button className={!is_male ? 'underline' : ''} onClick={() => switchGender('F')}>
          F
        </button>
      </div>
    </div>
  );
};

export default GenderSwitch;
