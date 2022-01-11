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
                            <ul className="page1 on">
                                <h1>Agree to the Terms of Service</h1>
                                <li>
                                    <input type="checkbox" name="agree" id="agree"></input>
                                    <p>I agreed to Terms of <br></br> Umbrella Corporation</p>
                                </li>
                                <li>
                                    <input type="checkbox" name="agree" id="agree"></input>
                                    <p>I agreed to Collection and <br></br>use of personal information</p>
                                </li>
                                <li>
                                    <input type="checkbox" name="agree" id="agree"></input>
                                    <p>I agreed to Overseas transfer <br></br>of personal information</p>
                                </li>
                                <li className="membershipBtn">
                                    <i className="fas fa-arrow-alt-circle-right"></i>
                                </li>
                            </ul>

                            <ul className="page2">
                                <h1>Join</h1>
                                <li>
                                    <input type="text" name="id" id="id" placeholder="ID" required></input>
                                </li>
                                <li>
                                    <input type="text" name="pwd" id="pwd" placeholder="PASSWORD" required></input>
                                </li>
                                <li>
                                <input type="text" name="pwd" id="pwd" placeholder="PASSWORD Verify" required></input>
                                </li>
                                <li>
                                <input type="text" name="name" id="name" placeholder="Name" required></input>
                                </li>
                                <li>
                                <input type="text" name="number" id="number" placeholder="PhoneNumber" required></input>
                                </li>
                                <li className="aim">
                                    <input type="radio" value="scientist" id="scientist" name="aim"></input>
                                    <p>Scientist</p>
                                    <input type="radio" value="Medical" id="Medical" name="aim"></input>
                                    <p>Medical</p>
                                    <input type="radio" value="Student" id="Student" name="aim"></input>
                                    <p>Student</p>
                                </li>
                                <li className="membershipBtn">
                                    <i className="fas fa-arrow-alt-circle-right"></i>
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