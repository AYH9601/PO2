import {NavLink} from "react-router-dom";

function Membership(){
    return (
        <section className="content membership">
            <div className="inner">
                <main>
                    <nav className="memberHeader">
                        <NavLink exact to="/main">
                            <div className="footerPic">UMBRELLA<br></br>CORPORATION</div>
                        </NavLink>
                    </nav>
                    
                    <article>
                        <div className="join">
                            <ul>
                                <li><h1>Agree to the Terms of Service</h1></li>
                                <li>
                                    <input type="checkbox" name="agree" id="agree"></input>
                                    <p>I agreed to Terms of Umbrella Technology</p>
                                </li>
                                <li>
                                    <input type="checkbox" name="agree" id="agree"></input>
                                    <p>I agreed to Collection and use of personal information</p>
                                </li>
                                <li>
                                    <input type="checkbox" name="agree" id="agree"></input>
                                    <p>I agreed to Overseas transfer of personal information</p>
                                </li>
                            </ul>                            
                        </div>
                    </article>

                    <nav className="memberFooter">
                        <h1>Welcome to Umbrella Corporation. <br></br>Sign up and join our Biotechnology. <br></br>Get our Education, Technology and Recruitment.</h1>
                        <ul className="footerLeft">
                            <li>
                                <span>&copy; 2022 Umbrella Inc. All rights reserved</span>
                            </li>
                            <li><NavLink exact to="/Department">Department</NavLink></li>
                            <li><NavLink exact to="/Board">Board</NavLink></li>
                            <li><NavLink exact to="/Gallery">Gallery</NavLink></li>
                            <li><NavLink exact to="/Youtube">Youtube</NavLink></li>
                        </ul>
                        <ul className="footerRight">
                            <li>CS center</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </nav>
                </main>
            </div>
        </section>
    )
}

export default Membership;