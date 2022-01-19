import {NavLink} from "react-router-dom";

function Header(){
    const active = {color:"crimson"}
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
                                <i className="fas fa-map-marker-alt"></i>
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

                <div className="tabletHeader">
                    <div className="btnCall">
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
                            </ul>
                        </nav>
                    </nav>
                </div>

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

function LatestStories(){
    return (
        <div className="inner">
            <div className="latestStories">
                <h3>Latest Stories</h3>

                <article>
                    <h4>Science</h4>
                    <ul>
                        <li className="LSTitle">
                            How Does a Virus Inhibitor Work
                        </li>
                        <li className="LSArticle">
                            The FDA has authorized Umbrella's COVID-20 oral treatment for emergency use.</li>
                    </ul>
                    <div className="LSPic">
                        <div className="articlePic1">
                        </div>
                    </div>
                </article>

                <article>
                    <h4>Our<br></br>Products</h4>
                    <ul>
                        <li className="LSTitle">Finally, A Cure For Progeria Has Been Completed.</li>
                        <li className="LSArticle">
                            After the efforts of many scientists, we have created a treatment using a new virus.</li>
                    </ul>
                    <div className="LSPic">
                        <div className="articlePic2">
                        </div>
                    </div>
                </article>

                <article>
                    <h4>Our<br></br>Purpose</h4>
                    <ul>
                        <li className="LSTitle">Umbrella's Institue Vision</li>
                        <li className="LSArticle">We will protect humanity with an umbrella.</li>
                    </ul>
                    <div className="LSPic">
                        <div className="articlePic3">
                        </div>
                    </div>
                </article>

                <article>
                    <button>See More News</button>
                </article>
            </div>
        </div>
    )
}

export {Header, Footer, LatestStories};