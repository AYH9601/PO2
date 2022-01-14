import { useEffect, useRef, useState } from "react";

function Location(){
    const {kakao} = window;
    const container = useRef(null);
	const btnBranch = useRef(null);

    return (
        <section className="content location">
            <div className="inner">
                <div className="locationHeader">
                    <h1>Umbrella BioTechnoloy Center & Hospital</h1>
                    <h2>Need biotech and medical assistance? We always welcome you.</h2>
                </div>

                <ul className="dot">
                    <li>
                        <div className="box">
                            <div className="hos">
                                <div className="pic"></div>
                                <h3>Umbrella Virus Center</h3>
                                <p>Bucheon-city. Korea</p>
                                <em>Open at am 8</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos">
                                <div className="pic"></div>
                                <h3>Umbrella BioTech Center</h3>
                                <p>Seoul Metropolitan Government. Korea</p>
                                <em>Open at am 8</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos">
                                <div className="pic"></div>
                                <h3>Umbrella Business District</h3>
                                <p>Hwaseong-city. Korea</p>
                                <em>Open at am 9</em>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="hos">
                                <div className="pic"></div>
                                <h3>Umbrella Global Production Base</h3>
                                <p>Incheon Metropolitan City. Korea</p>
                                <em>Open at am 7</em>
                            </div>
                        </div>
                    </li>
                </ul>

                <div id="map" ref={container}></div>
            </div>
        </section>
    )
}

export default Location;