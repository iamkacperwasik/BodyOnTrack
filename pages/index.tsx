import type {NextPage} from 'next';
import Form from '../components/Form';
import {useBodyInfoStore} from '../stores/BodyInfo';

const Home: NextPage = () => {
  const {age, weight, height, gender} = useBodyInfoStore();

  return (
    <div className='p-5'>
      <Form />

      <div className='mt-5'>
        <p>Age: {age}</p>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
        <p>Gender: {gender === 'M' ? 'Male' : 'Female'}</p>
      </div>
    </div>
  );
};

export default Home;
