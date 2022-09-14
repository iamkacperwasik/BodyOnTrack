import {FC} from 'react';
import {useBodyInfoStore} from '../stores/BodyInfo';

const Form: FC = () => {
  const bodyInfo = useBodyInfoStore();

  return (
    <div className='p-5 flex gap-4 flex-col'>
      <div>
        <p>Age:</p>
        <input
          type='number'
          className='border-[1px]'
          value={bodyInfo.age || ''}
          onChange={({target}) => bodyInfo.setAge(+target.value)}
        />
      </div>
      <div>
        {/* TODO: switch  */}
        <p>Weight (kg/lb)</p>
        <input
          type='number'
          className='border-[1px]'
          value={bodyInfo.weight || ''}
          onChange={({target}) => bodyInfo.setWeight(+target.value)}
        />
      </div>
      <div>
        {/* TODO: switch  */}
        <p>Height (cm/ft)</p>
        <input
          type='number'
          className='border-[1px]'
          value={bodyInfo.height || ''}
          onChange={({target}) => bodyInfo.setHeight(+target.value)}
        />
      </div>
      <div>
        <p>Gender</p>
        <div>
          <button onClick={() => bodyInfo.switchGender('M')}>M</button>
          <button onClick={() => bodyInfo.switchGender('F')}>F</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
