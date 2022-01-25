import { useEffect, useRef, useState } from "react";

function Join(){
    const frame = useRef(null);
    const initVal={
        userid : '',
        pwd1 : '',
        pwd2 : '',
        email: '',
        type: '',
        aim: '',
        nation: ''
    }

    const [val, setVal] = useState(initVal);
    const [err, setErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = e => {   
        const {name, value} = e.target;     
        setVal({...val, [name]: value});     
    }

    const handleCheck = e => {    
        const {name} = e.target;  
        const isCheck = e.target.checked;   
        setVal({...val, [name]: isCheck});  
    }

    const handleSelect = e => {
        const {name} = e.target;
        //console.log(e.target.options);
        const isSelected = e.target.options[e.target.selectedIndex].value;
        setVal({...val, [name]: isSelected});
    }

    const handleSubmit = e =>{ 
        e.preventDefault();   
        setIsSubmit(true);
        setErr(check(val));  
        console.log(val);
    }

    const check = val=>{
        let errs = {};  
        let eng = /[a-zA-Z]/;
        let num = /[0-9]/;
        let spc = /[!@#$%^&*]/;

        if( !val.userid || val.userid.length <6 ){
            errs.userid='Please enter ID 6 or more characters.';
        } 
        if( !val.pwd1 || val.pwd1.length<7 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)){
            errs.pwd1='Password must be 7 or more, including letters, numbers, and special characters.';
        }
        if( !val.email || val.email.length <7 || !/@/.test(val.email) ){
            errs.email='Please enter Email 7 or more characters.';
        }
        if( !val.pwd2 || val.pwd1 !== val.pwd2 ){
            errs.pwd2='Enter the same with passwords.';
        }
        if( !val.type ){
            errs.type='Choose your subscription type.';
        }
        if( !val.aim ){
            errs.aim='Choose your subscription purpose.';
        }
        if( !val.nation ){
            errs.nation='Choose Your Nationality'
        }
        return errs;
    }

    useEffect(()=>{    
        frame.current.classList.add('on');    
        console.log(err);
        const len =  Object.keys(err).length;
        if(len === 0 && isSubmit){
            console.log('PASS !');
            setSuccess(true);     
        }else{
            console.log('FAIL ! MISS MATCH');
            setSuccess(false);
        }
    },[err]);

return (
    <main className='join' ref={frame}>
        <div className="inner">
            <h1>Umbrella Membership</h1>
            <h2>Join Umbrella and Discover our Education and Technology</h2>
            <button>Click here for Patient registration <br></br>at Umbrella General Hospital</button>
            {success ? <div>Welcome to Umbrella.</div> : null }

            <div className="membershipInner">
                <form onSubmit={handleSubmit} >
                    <fieldset>
                        <legend className='access'>Join Foam</legend>

                        <table>
                            <caption className='access'>Enter Join</caption>
                            <tbody>
                                {/* ID */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="userid">USER ID</label>
                                    </th>
                                    <td>
                                        <input 
                                            type="text" 
                                            id='userid'
                                            name='userid'
                                            placeholder='Enter ID'                    
                                            onChange={handleChange}
                                        />
                                        <span className='err'>{err.userid}</span>
                                    </td>
                                </tr> 

                                {/* Password */}
                                <tr>
                                    <th th scope='row'>
                                        <label htmlFor="pwd1">PASSWORD</label>
                                    </th>
                                    <td>
                                    <input 
                                        type="password" 
                                        id='pwd1'
                                        name='pwd1'
                                        placeholder='Enter PASSWORD'                  
                                        onChange={handleChange}
                                        />
                                        <span className='err'>{err.pwd1}</span>
                                    </td>
                                </tr>

                                {/* Password Re */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="pwd2">PASSWORD Re</label>
                                    </th>
                                    <td>
                                        <input 
                                        type="password" 
                                        id='pwd2'
                                        name='pwd2'
                                        placeholder='Enter PASSWORD Re'                  
                                        onChange={handleChange}
                                        />
                                        <span className='err'>{err.pwd2}</span>
                                    </td>
                                </tr>

                                {/* Email */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor="email">E-MAIL</label>
                                    </th>
                                    <td>
                                    <input 
                                        type="text" 
                                        id='email'
                                        name='email'
                                        placeholder='Enter Email'         
                                        onChange={handleChange}
                                    />
                                        <span className='err'>{err.email}</span>
                                    </td>
                                </tr>

                                {/* Type,Plan */}
                                <tr>
                                    <th scope='row'>
                                        Plan
                                    </th>
                                    <td>
                                        <input 
                                            type="radio" 
                                            id='basic' 
                                            name='type' 
                                            onChange = {handleCheck}
                                        />
                                        <label htmlFor='basic'>BASIC</label>

                                        <input 
                                            type="radio" 
                                            id='standard' 
                                            name='type' 
                                            onChange = {handleCheck} 
                                        />
                                        <label htmlFor='standard'>STANDARD</label>

                                        <input 
                                            type="radio" 
                                            id='hyper' 
                                            name='type' 
                                            onChange = {handleCheck} 
                                        />
                                        <label htmlFor='hyper'>HYPER</label>
                                        <br></br>
                                        <span className='err errSelect'>{err.type}</span>
                                    </td>
                                </tr>

                                {/* Aim */}
                                <tr>
                                    <th scope='row'>
                                        Aim
                                    </th>
                                    <td className="aimPlan">
                                        <input 
                                            type="checkbox" 
                                            id='education' 
                                            name='aim' 
                                            onChange = {handleCheck}
                                        />
                                        <label htmlFor='education'>Education</label>
                                        
                                        <input 
                                            type="checkbox" 
                                            id='technology' 
                                            name='aim' 
                                            onChange = {handleCheck} 
                                        />
                                        <label htmlFor='technology'>Technology</label>
                                        
                                        <input 
                                            type="checkbox" 
                                            id='recruit' 
                                            name='aim' 
                                            onChange = {handleCheck} 
                                        />
                                        <label htmlFor='recruit'>Recruit</label>
                                        <br></br>
                                        <span className='err errSelect'>{err.aim}</span>
                                    </td>
                                </tr>

                                {/* Nationality */}
                                <tr>
                                    <th scope='row'>
                                        <label htmlFor='nation'>Nationality</label>
                                    </th>
                                    <td>                    
                                        <select name="nation" id="nation" onChange={handleSelect}>
                                            <option value="">Choose nation</option>
                                            <option value="korea">Korea</option>
                                            <option value="usa">USA</option>
                                            <option value="japan">Japan</option>
                                            <option value="china">China</option>
                                            <option value="india">India</option>
                                            <option value="england">England</option>
                                            <option value="france">France</option>
                                            <option value="germany">Germany</option>
                                            <option value="russia">Russia</option>
                                        </select>
                                        <span className='err'>{err.nation}</span>
                                    </td>
                                </tr>

                                {/* Submit */}
                                <tr>
                                    <th colSpan='2' className='btnSet'>
                                        {/* <input type="reset" value='CANCEL' /> */}
                                        <input type="submit" value='JOIN' />
                                    </th>
                                </tr> 
                            </tbody>       
                        </table>
                    </fieldset>
                </form>
            </div>

            <div className="membershipLower">
                <h3>SSN Protection Policy</h3>
                <h4>
                    In the ordinary course of business, sometimes we have to collect your Social Security number to fulfill legal or regulatory obligations, or for other administrative purposes. It is our policy to avoid the unnecessary collection of Social Security numbers. We limit access to your Social Security number in order to protect tyour privacy  and to prohibit the unlawful disclosure of your Social Security number.
                </h4>

                <h3>Keeping Our Systems Secure</h3>
                <h4>
                    We take cybersecurity seriously, and value the contributions of the security community at large. The responsible disclosure of potential issues helps us to ensure the security and privacy of our customers and data. If you believe you have found a security issue in one of our products or services, please let us know through our Responsible Disclosure Policy.
                </h4>
            </div>
        </div>
    </main>
    )
}

export default Join;