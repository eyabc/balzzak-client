import React, { Component } from 'react';
import styled from 'styled-components';

/* global kakao */
class MapContent extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=3e6d8c51fb99bd08d987aa93656b7541&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById('Mymap');
        const options = {
          center: new kakao.maps.LatLng(37.600172, 127.077840),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 포지션 설정
        const markerPosition = new kakao.maps.LatLng(37.600172, 127.077840);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

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
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }

  render() {
    return <MapContents id="Mymap" style={{ width: '90vh', height: '50vh' }} />;
  }
}
const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapContent;
