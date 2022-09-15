import {FC} from 'react';
import {useBodyInfoStore} from '../../stores/BodyInfo';

const WeightInput: FC = () => {
  const {weight, setWeight} = useBodyInfoStore();

  return (
    <div>
      {/* TODO: switch  */}
      <p>Weight (kg/lb)</p>
      <input
        type='number'
        className='border-[1px]'
        value={weight === null ? '' : weight}
        onChange={({target}) => setWeight(+target.value)}
      />
    </div>
  );
};

export default WeightInput;
