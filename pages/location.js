import React, { useEffect } from 'react';
import { Row, Col } from 'antd';

const Location = () => {

    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new window.kakao.maps.LatLng(37.600172, 127.077840),
            level: 3
        };
        // 지도생성
        let map = new window.kakao.maps.Map(container, options);

        // 마커 포지션 설정
        let markerPosition  = new kakao.maps.LatLng(37.600172, 127.077840);

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        let iwContent = '<div style="padding:5px;">발짝 <br><a href="https://map.kakao.com/link/map/발짝,37.600172, 127.077840" ' +
            'style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/발짝,37.600172, 127.077840" ' +
            'style="color:#0000ff" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(37.600172, 127.077840); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            position : iwPosition,
            content : iwContent
        });

        infowindow.open(map, marker);
    }, [])

    return (
        <>
            <Row>
                <script type="text/javascript"
                        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3e6d8c51fb99bd08d987aa93656b7541&libraries=services,clusterer,drawing"></script>
                <div id={"map"} style={{width: '100vw', height: '50vh', padding: '10px'}}>
                    about
                </div>
            </Row>
        </>
    )
}

export default Location;
