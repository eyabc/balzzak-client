import { useState, useCallback } from 'react';

const useDropDown = (initialValue) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const [errorMsg, setErrorMsg] = useState('');

  const onClickSelect = useCallback((value) => {
    setSelectedValue(value);
  }, []);

  return [selectedValue, onClickSelect, errorMsg, setErrorMsg];
};

export default useDropDown;
