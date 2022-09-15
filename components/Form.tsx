import {FC} from 'react';
import useBodyInfoValidation from '../hooks/useBodyInfoValidation';
import AgeInput from './Form/AgeInput';
import GenderSwitch from './Form/GenderSwitch';
import HeightInput from './Form/HeightInput';
import WeightInput from './Form/WeightInput';

const Form: FC = () => {
  useBodyInfoValidation();

  return (
    <div className='flex gap-4 flex-col'>
      <AgeInput />
      <WeightInput />
      <HeightInput />
      <GenderSwitch />
    </div>
  );
};

export default Form;
