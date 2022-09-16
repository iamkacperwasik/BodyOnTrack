import {FC} from 'react';
import {useBodyInfoStore} from '../../stores/BodyInfo';

const HeightInput: FC = () => {
  const {height, setHeight, metric, switchMetric} = useBodyInfoStore();

  return (
    <div>
      <p>
        Height (
        <span className={`pointer ${metric && 'underline'}`} onClick={() => switchMetric(true)}>
          cm
        </span>
        /
        <span className={`pointer ${!metric && 'underline'}`} onClick={() => switchMetric(false)}>
          ft
        </span>
        )
      </p>

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
