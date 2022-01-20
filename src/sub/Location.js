import { useEffect, useRef, useState } from "react";

function Location(){
    const {kakao} = window;
    const container = useRef(null);
	const btnBranch = useRef(null);
	const [map, setMap] = useState(null);
	const [index, setIndex] = useState(0)
	const [toggle, setToggle] = useState(false);

    const info = [
		{
			title : "Umbrella Virus Center", 
			latlng : new kakao.maps.LatLng(37.49843613566955,126.76273179094987),
			imgSrc : process.env.PUBLIC_URL+"/img/marker.png",
			imgSize : new kakao.maps.Size(60, 97),
			imgPos : {offset: new kakao.maps.Point(116, 99)},		
		},
		{
			title : "Umbrella BioTech Center", 
			latlng : new kakao.maps.LatLng(37.5779531,127.0018347),
			imgSrc : process.env.PUBLIC_URL+"/img/marker.png",
			imgSize : new kakao.maps.Size(60, 97),
			imgPos : {offset: new kakao.maps.Point(116, 99)},
		},
		{
			title : "Umbrella Business District", 
			latlng : new kakao.maps.LatLng(37.2229453,127.0630783),
			imgSrc : process.env.PUBLIC_URL+"/img/marker.png",
			imgSize : new kakao.maps.Size(60, 97),
			imgPos : {offset: new kakao.maps.Point(116, 99)},
		},
        {
            title : "Umbrella Global Production Base",
			latlng : new kakao.maps.LatLng(37.5123161,126.7132263),
			imgSrc : process.env.PUBLIC_URL+"/img/marker.png",
			imgSize : new kakao.maps.Size(60, 97),
			imgPos : {offset: new kakao.maps.Point(116, 99)},
        }
	];

    const [mapInfo, setMapInfo] = useState(info);

    useEffect(()=>{
        container.current.innerHTML="";
		const options = { //지도를 생성할 때 필요한 기본 옵션
			center: mapInfo[index].latlng, //지도의 중심좌표.
			level: 3 //지도의 레벨(확대, 축소 정도)
		};

		//카카오맵 생성자로부터 인스턴스 복사해서 맵 실행
		const map = new kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
		setMap(map);

		new kakao.maps.Marker({
			map: map, // 마커를 표시할 지도
			position: mapInfo[index].latlng, // 마커를 표시할 위치
			title : mapInfo[index].title, // 마커의 타이틀 
			image : new kakao.maps.MarkerImage(mapInfo[index].imgSrc, mapInfo[index].imgSize, mapInfo[index].imgPos)  // 마커 이미지 
		});

		map.setCenter(mapInfo[index].latlng); 

		//지도 타입변경 패널 프레임에 생성
		const mapTypeControl = new kakao.maps.MapTypeControl();
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		//휠로 줌 기능 활성화
		map.setZoomable(true);
		//마우스 드래그기능 활성화
		map.setDraggable(true);

		//모든 버튼 초기화한 뒤, index state번째의 li요소만 활성화
		for(const btn of btnBranch.current.children) btn.classList.remove("on")
		btnBranch.current.children[index].classList.add("on");

		const mapSet = ()=> map.setCenter(mapInfo[index].latlng);


		//윈도우 리사이즈시 마커 위치 중앙배치
		window.addEventListener("resize",mapSet)

		//해당  컴포넌트가 사라질때 기존 window에 등록된 이벤트제거
		return()=> window.removeEventListener("resize",mapSet);

	},[index]);

    return (
        <section className="content location">
            <div className="inner">

                <div className="locationHeader">
                    <h1>Umbrella BioTechnoloy Center & Hospital</h1>
                    <h2>Need biotech and medical assistance? We always with you.</h2>

                    <div className="locationSearchBox">
                        <input type="text" id="search" placeholder="Search for Location"/>

                        <button className="btnSearch">
                            <div className="arrowCircle">
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </button>
                    </div>

                    <ul>
                        <li>USA</li>
                        <li>ENGLAND</li>
                        <li>FRANCE</li>
                        <li>GERMANY</li>
                        <li>RUSSIA</li>
                        <li>INDIA</li>
                        <li className="active">KOREA</li>
                        <li>CHINA</li>
                        <li>JAPAN</li>
                    </ul>
                </div>

                <ul className="dot" ref={btnBranch}>
                    <li>
                        <div className="box">
                            <div className="hos" onClick={()=>{
                            setIndex(0)
                        }}>
                                <div className="pic hos1"></div>
                                <h3>Umbrella Virus Center</h3>
                                <p>Bucheon-city. Korea</p>
                                <em>Open at am 8</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos" onClick={()=>{
                            setIndex(1)
                        }}>
                                <div className="pic hos2"></div>
                                <h3>Umbrella BioTech Center</h3>
                                <p>Seoul Metropolitan Government. Korea</p>
                                <em>Open at am 8</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos" onClick={()=>{
                            setIndex(2)
                        }}>
                                <div className="pic hos3"></div>
                                <h3>Umbrella Business District</h3>
                                <p>Hwaseong-city. Korea</p>
                                <em>Open at am 9</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos" onClick={()=>{
                            setIndex(3)
                        }}>
                                <div className="pic hos4"></div>
                                <h3>Umbrella Global Production Base</h3>
                                <p>Incheon Metropolitan City. Korea</p>
                                <em>Open at am 7</em>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="kakaomap">
                    <div id="map" ref={container}></div>
                    <ul className="traffic">
                        {
                            toggle 
                            ? //toggle값이 true일때 끄기 버튼 활성화
                            <li onClick={()=>{
                                map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                // on off 버튼처럼 하는 기능
                                setToggle(!toggle)
                                }}>Traffic On</li>
                            : //toggle값이 false일때 켜기 버튼 활성화
                            <li onClick={()=>{
                                //버튼 클릭 시 state map에 담겨있는 인스턴스로부터 기능호출
                                map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
                                setToggle(!toggle)
                            }}>Traffic Off</li>
                        }
                    </ul>
                </div>

                <div className="hospital">
                    <h3>Hospital</h3>
                    <div className="hospitalLeft"></div>
                    <div className="hospitalRight">
                        <h4>Experience the best medical support at Umbrella General Hospital.</h4>
                        <p>
                            You can find very advanced biotechnology and pharmaceutical technology at Umbrella Hospital. For patients and their families, our medical staff are committed to providing the best possible support at all times.
                        </p>
                    </div>
                </div>

                <ul className="hosBox" ref={btnBranch}>
                    <li>
                        <div className="box">
                            <div className="hos">
                                <h3>Public Health and Medical Agency</h3>
                                <p>
                                    For the development of public health care We are running a variety of businesses.
                                </p>
                                <em>Show More</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos">
                                <h3>Health Promotion Center</h3>
                                <p>
                                    Disease prevention and quality of life improvement strive for
                                </p>
                                <em>Show More</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos">
                                <h3>Development Support Group</h3>
                                <p>
                                    A warm heart towards medical development will respond.
                                </p>
                                <em>Show More</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos">
                                <h3>Medical Cooperation Center</h3>
                                <p>
                                    Medical care as one network Umbrella treatment cooperation system
                                </p>
                                <em>Show More</em>
                            </div>
                        </div>
                    </li>
                </ul>

                <button className="hosBtn">Umbrella General Hospital</button>
            </div>
        </section>
    )
}

export default Location;