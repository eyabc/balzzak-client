import React, { useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import useDropDown from '../../hooks/useDropDown';

const { Option } = Select;

const LocationSearch = () => {
  const [location1, onClickSelect1] = useDropDown('seoul');
  const [location2, onClickSelect2] = useDropDown('junglang');

  function onSubmit(value) {
    console.log(location1, location2);
  }

  useEffect(() => {
  }, []);

  return (
    <>
      <Select defaultValue="서울" onChange={onClickSelect1}>
        <Option value="seoul">서울</Option>
        <Option value="busan">부산</Option>
      </Select>
      <Select defaultValue="중랑구" onChange={onClickSelect2}>
        <Option value="junglang">중랑구</Option>
        <Option value="nowon">노원구</Option>
      </Select>
      <Button onClick={onSubmit}>검색</Button>
    </>
  );
};

export default LocationSearch;
