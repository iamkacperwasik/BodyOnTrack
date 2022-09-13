import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <div className='p-5 flex gap-4 flex-col'>
      <div>
        <p>Age:</p>
        <input type='number' className='border-[1px]' />
      </div>
      <div>
        {/* TODO: switch  */}
        <p>Weight (kg/lb)</p>
        <input type='number' className='border-[1px]' />
      </div>
      <div>
        {/* TODO: switch  */}
        <p>Height (m/ft)</p>
        <input type='number' className='border-[1px]' />
      </div>
      <div>
        <p>Gender</p>
        <div>
          {/* TODO: switch  */}
          <button>M</button>
          <button>F</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
