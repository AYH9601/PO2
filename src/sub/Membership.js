import { useState } from "react";
import {NavLink} from "react-router-dom";

function Membership(){
    const initVal={
        id : "",
        pwd1 : "",
        pwd2 : "",
        email : "",
        number : ""
    }

    const [val, setVal] = useState(initVal);
    const [err, setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        const {name,value} = e.target;
        setVal({...val,[name]:value})
    }

    const handleCheck = e => {
        const {name} = e.target;
        const isCheck = e.target.checked;
        setVal({...val,[name]:isCheck});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmit(true)
        setErr(check(val));
    }

    const check = val => {
        let errs = {};
		let eng = /[a-zA-Z]/
		let num = /[0-9]/
		let spc = /[~!@#$%^&*]/

        if( !val.id || val.id.length < 5) {
            errs.id = "Enter 5 or more text"
        }

        
    }

    return (
        <section className="content membership">
            <div className="inner">
                <main>
                    <nav className="memberHeader">
                        <NavLink exact to="/main">
                            <div className="footerPic">UMBRELLA<br></br>CORPORATION</div>
                        </NavLink>
                    </nav>
                    
                    <article onSubmit={handleSubmit}>
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
                                    <input 
                                        type="text" 
                                        name="id" 
                                        id="id" 
                                        placeholder="ID" 
                                        onChange={handleChange} 
                                        required>
                                    </input>
                                </li>
                                <li>
                                    <input 
                                        type="password" 
                                        name="pwd1" 
                                        id="pwd1" 
                                        placeholder="PASSWORD" 
                                        onChange={handleChange} 
                                        required>
                                    </input>
                                </li>
                                <li>
                                    <input 
                                        type="password" 
                                        name="pwd2" 
                                        id="pwd2" 
                                        placeholder="PASSWORD Re" 
                                        onChange={handleChange} 
                                        required>
                                    </input>
                                </li>
                                <li>
                                    <input 
                                        type="text"
                                        name="eamil" 
                                        id="email" 
                                        placeholder="E-mail" 
                                        onChange={handleChange} 
                                        required>
                                    </input>
                                </li>
                                <li>
                                    <input 
                                        type="text" 
                                        name="number" 
                                        id="number" 
                                        placeholder="Phone Number"
                                        onChange={handleChange}  
                                        required>
                                    </input>
                                </li>
                                <li className="aim">
                                    <input 
                                        type="radio" 
                                        value="scientist" 
                                        id="scientist" 
                                        name="aim"
                                        onChange={handleCheck}>
                                    </input>
                                    <label htmlFor="scientist">Scientist</label>
                                    <input 
                                        type="radio" 
                                        value="medical" 
                                        id="medical" 
                                        name="aim"
                                        onChange={handleCheck}>
                                    </input>
                                    <label htmlFor="medical">Medical</label>
                                    <input 
                                        type="radio" 
                                        value="student" 
                                        id="student" 
                                        name="aim"
                                        onChange={handleCheck}>
                                    </input>
                                    <label htmlFor="student">Student</label>
                                </li>

                                <li className="membershipBtn">
                                    <div className="btn">
                                        <input type="submit" value="Go"/>
                                        {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                                    </div>
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