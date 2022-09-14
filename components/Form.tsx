import {FC, useEffect, useState} from 'react';
import {useBodyInfoStore} from '../stores/BodyInfo';

const Form: FC = () => {
  const {age, height, weight, setAge, setHeight, setWeight, switchGender, validate} =
    useBodyInfoStore();

  const [formError, setFormError] = useState<null | string>(null);

  useEffect(() => {
    if (age === null || height === null || weight === null) {
      setFormError(null);

      return;
    }

    validate()
      .then(() => setFormError(null))
      .catch(({errors: [error]}) => {
        setFormError(error);
      });
  }, [age, height, weight, validate]);

  return (
    <div className='flex gap-4 flex-col'>
      <div>
        <p>Age:</p>
        <input
          type='number'
          className='border-[1px]'
          value={age === null ? '' : age}
          onChange={({target}) => setAge(+target.value)}
        />
      </div>
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
      <div>
        {/* TODO: switch  */}
        <p>Height (cm/ft)</p>
        <input
          type='number'
          className='border-[1px]'
          value={height === null ? '' : height}
          onChange={({target}) => setHeight(+target.value)}
        />
      </div>
      {formError && (
        <div>
          <p className='text-red-500'>{formError}</p>
        </div>
      )}
      <div>
        <p>Gender</p>
        <div>
          <button onClick={() => switchGender('M')}>M</button>
          <button onClick={() => switchGender('F')}>F</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
