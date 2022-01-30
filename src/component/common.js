import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header(){
    const active = {color:"crimson"}
    const btnCall = document.querySelector(".btnCall"); 
    const menuMo = document.querySelector(".menuMo");

    return (
        <header>
            <div className="inner">
                <h1>
                    <NavLink exact to="/main">
                        <div className="headerPic"></div>
                        {/* <span>UMBRELLA</span> */}
                    </NavLink>
                </h1>

                <nav className="menu">
                    <ul>
                        <li><NavLink activeStyle={active} exact to="/Department">Department</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/Board">Board</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/Gallery">Gallery</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/Youtube">Youtube</NavLink></li>
                        <li><NavLink activeStyle={active} exact to="/Membership">Membership</NavLink></li>
                    </ul>
                </nav>

                <nav className="three">
                    <ul>
                        <li>
                            <NavLink activeStyle={active} exact to="/Location">
                                Office
                                {/* <i className="fas fa-map-marker-alt"></i> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={active} exact to="/Contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <a href="#"><i className="fas fa-globe-americas"></i></a>
                        </li>
                    </ul>
                </nav>

                <FontAwesomeIcon icon={faBars} />

                <div className="btnCall" onClick={e=>{
                    e.currentTarget.classList.toggle("on");
                    menuMo.classList.toggle("on");
                    }}>
                    <span>Call button</span>
                </div>

                <nav className="menuMo">
                    <h1>
                        <NavLink exact to="/main">
                            <div className="headerPic"></div>
                        </NavLink>
                    </h1>
                    <nav className="gnbMo">
                        <ul>
                            <li><NavLink activeStyle={active} exact to="/Department">Department</NavLink></li>
                            <li><NavLink activeStyle={active} exact to="/Board">Board</NavLink></li>
                            <li><NavLink activeStyle={active} exact to="/Gallery">Gallery</NavLink></li>
                            <li><NavLink activeStyle={active} exact to="/Youtube">Youtube</NavLink></li>
                            <li><NavLink activeStyle={active} exact to="/Membership">Membership</NavLink></li>
                            <li><NavLink activeStyle={active} exact to="/Location">Location</NavLink></li>
                        </ul>
                    </nav>

                    <span className="gnbMo2">&copy; 2022 Umbrella Inc. All rights reserved</span>
                </nav>
            </div>
        </header>
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