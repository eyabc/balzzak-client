import React, { useState } from 'react';
import { Row, Col } from 'antd';
import LocationTap from './tab';
import MapContent from './location';
import LocationSearch from './locationSearch';

const Location = () => {
  return (
    <>
      <Row>
        <div style={{ border: '1px solid black' }}>
          홈 > 매장정보
        </div>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <LocationTap />
          <div style={{ border: '1px solid black', height: '600px' }}>
            <LocationSearch />
            임시 정보
          </div>
        </Col>
        <Col span={10}>
          <MapContent />
        </Col>
      </Row>
    </>
  );
};

export default Location;
