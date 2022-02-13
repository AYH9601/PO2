import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useRef, useState, useEffect} from 'react';

function Header(){ 
    let nav = useRef(null);
    const [isOn, setIsOn] = useState(false);
    const toggleNav = () =>setIsOn(!isOn);
    const closeNav = () => window.innerWidth > 1200 && setIsOn(false);

    useEffect(()=>{
        window.addEventListener('resize', closeNav);
        return ()=> window.removeEventListener('resize', closeNav);  
    },[])

    return (
        <>
        <header className={' myScroll'}>
            <div className="inner">
                {/* <h1>
                    <NavLink exact to="/main" onClick={toggleNav}>
                        <div className="headerPic"></div>
                    </NavLink>
                </h1> */}

                <Gnb />  
                
                <FontAwesomeIcon icon={faBars} onClick={toggleNav} />
            </div>
        </header>

        <nav ref={nav} className={isOn ? 'on' : null}>
            <Gnb toggleNav={toggleNav} />
        </nav>
        </>
    )
}

function Gnb(props){
    const active = {color: "crimson"};
    return (
        <>
        <h1>
            <NavLink exact to="/main" onClick={props.toggleNav}>
                <div className="headerPic"></div>
            </NavLink>
        </h1>
        <ul id="gnb" onClick={props.toggleNav}>
            <li><NavLink clasname="gnbMain" to="/main">
                <div className="headerPic"></div>
                </NavLink>
            </li>

            <li><NavLink activeStyle={active} to="/department">Department</NavLink></li>
            <li><NavLink activeStyle={active} to="/board">Board</NavLink></li>
            <li><NavLink activeStyle={active} to="/gallery">Gallery</NavLink></li>
            <li><NavLink activeStyle={active} to="/youtube">Media</NavLink></li>
            <li><NavLink activeStyle={active} to="/location">Location</NavLink></li>
            <li><NavLink activeStyle={active} to="/membership">Membership</NavLink></li>
            <FontAwesomeIcon icon={faBars} />

            <li><span>&copy; 2022 Umbrella Inc. All rights reserved</span></li>
        </ul>
        </>
    )
}

function Footer(){
    return (
        <footer>
            <div className="inner">
                <div className="upper">
                    <ul>
                        <li>
                            <NavLink exact to="/main">
                                <div className="footerPic"></div>
                            </NavLink>
                        </li>
                        <li>
                            <a><NavLink  exact to="/Department">Department</NavLink></a>
                            <a><NavLink  exact to="/Board">Board</NavLink></a>
                            <a><NavLink  exact to="/Gallery">Gallery</NavLink></a>
                            <a><NavLink  exact to="/Youtube">Youtube</NavLink></a>
                            <a><NavLink  exact to="/Membership">Membership</NavLink></a>
                        </li>
                        <li>
                            <p>Privacy Statement</p>
                            <p>Terms of Use</p>
                            <p>Grant Seekers</p>
                            <p>Health Care Professionals</p>
                        </li>
                        <li>
                            <p>Venture Investments</p>
                            <p>Umbrella CenterOne</p>
                            <p>Business to Business</p>
                            <p>Merchandise</p>
                        </li>
                    </ul>
                </div>

                <div className="lower">
                    <ul>
                        <li className="lowerLeft">
                            <a href="#">
                                <i className="fas fa-globe-americas"></i>
                                United States
                            </a>
                            <span>&copy; 2022 Umbrella Inc. All rights reserved</span>
                        </li>
                        <li className="lowerRight">
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-youtube-square"></i>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}


export {Header, Footer};