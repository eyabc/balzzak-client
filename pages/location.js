import React, { useEffect } from 'react';
import { Row } from 'antd';

const Location = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.600172, 127.077840),
      level: 3,
    };
    // 지도생성
    const map = new window.kakao.maps.Map(container, options);

    // 마커 포지션 설정
    const markerPosition = new kakao.maps.LatLng(37.600172, 127.077840);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    const iwContent = '<div style="padding:5px;">발짝 <br><a href="https://map.kakao.com/link/map/발짝,37.600172, 127.077840" '
            + 'style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/발짝,37.600172, 127.077840" '
            + 'style="color:#0000ff" target="_blank">길찾기</a></div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    const iwPosition = new kakao.maps.LatLng(37.600172, 127.077840); // 인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    infowindow.open(map, marker);
  }, []);

  return (
    <>
      <Row>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3e6d8c51fb99bd08d987aa93656b7541&libraries=services,clusterer,drawing" />
        <div id="map" style={{ width: '100vw', height: '50vh', padding: '10px' }} />
      </Row>
    </>
  );
};

export default Location;
