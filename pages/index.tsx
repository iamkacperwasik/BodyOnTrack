import type {NextPage} from 'next';
import {Else, If, Then, When} from 'react-if';
import Form from '../components/Form';
import getBMI from '../formulas/getBMI';
import {useBodyInfoStore} from '../stores/BodyInfo';

const Home: NextPage = () => {
  const {age, weight, height, gender, bodyInfoError} = useBodyInfoStore();

  return (
    <div className='p-5'>
      <Form />

      <If condition={bodyInfoError}>
        <Then>
          <div>
            <p className='text-red-500'>{bodyInfoError}</p>
          </div>
        </Then>
        <Else>
          <When condition={age && weight && height}>
            <div className='mt-5'>
              <p>Age: {age}</p>
              <p>Weight: {weight}</p>
              <p>Height: {height}</p>
              <p>Gender: {gender === 'M' ? 'Male' : 'Female'}</p>
              <p>BMI: {getBMI(weight!, height!).toFixed(2)}</p>
            </div>
          </When>
        </Else>
      </If>
    </div>
  );
};

export default Home;
