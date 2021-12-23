import {NavLink} from "react-router-dom";

function Header(){
    const active = {color:"red"}
    return (
        <>
        <header>
            <div className="inner">
                <nav className="title">
                    <h1>
                        <NavLink exact to="/main">
                            <img src="" alt="" />
                            <span>UMBRELLA</span>
                            <p>CORPORATION</p>
                        </NavLink>
                    </h1>
                    <address>
                        BIOLOGICAL PROTECTION <br></br>
                        ALL RIGHTS RESERVED.
                    </address>
                </nav>

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
            </div>
        </header>
        </>
    )
}

export default Header;