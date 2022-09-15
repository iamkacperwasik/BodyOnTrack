import {useEffect} from 'react';
import {useBodyInfoStore} from '../stores/BodyInfo';

const useBodyInfoValidation = () => {
  const {age, height, weight, setBodyInfoError, validate} = useBodyInfoStore();

  useEffect(() => {
    if (age === null || height === null || weight === null) {
      setBodyInfoError(null);

      return;
    }

    validate();
  }, [age, weight, height, setBodyInfoError, validate]);
};

export default useBodyInfoValidation;
