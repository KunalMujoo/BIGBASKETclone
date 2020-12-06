import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';


    function RegisterScreen(props) {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [rePassword, setRePassword] = useState('');
        const [Address, setAddress] = useState('');             //
        const [CardNumber, setCardNumber] = useState('');     //
        const userRegister = useSelector(state=>state.userRegister);
        const {loading,userInfo,error} = userRegister;
        const dispatch = useDispatch();

        useEffect(() => {
           
            if(userInfo){
                props.history.push("/");
            }
            return () => {

            };
        }, [userInfo]);  //if userInfo state changes then the code runs

        
        const submitHandler = (e) =>{
            e.preventDefault();
            dispatch(register(name,email,password,Address,CardNumber));
        }

        return <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h3>Register</h3>
                    </li>
                    <li>
                       {loading && <div>Loading...</div>} 
                       {error && <div>{error}</div>} 
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>

                        </input>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="rePassword">Password</label>
                        <input type="rePassword" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
                        </input>
                    </li>
                    
                    <li>
                        <label htmlFor="Address">Address</label>
                        <input type="Address" id="Address" name="Address" onChange={(e) => setAddress(e.target.value)}>
                        </input>
                    </li>
                    
                    <li>
                        <label htmlFor="CardNumber">CardNumber</label>
                        <input type="CardNumber" id="CardNumber" name="CartNumber" onChange={(e) => setCardNumber(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Register</button>
                    </li>
                    <li>
                        Already have an account? <Link to='/signin'>Sign-In</Link>
                    </li>
                </ul>
            </form>
        </div>
    }
export default RegisterScreen;

