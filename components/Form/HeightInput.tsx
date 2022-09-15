import {FC} from 'react';
import {useBodyInfoStore} from '../../stores/BodyInfo';

const HeightInput: FC = () => {
  const {height, setHeight} = useBodyInfoStore();

  return (
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
  );
};

export default HeightInput;
