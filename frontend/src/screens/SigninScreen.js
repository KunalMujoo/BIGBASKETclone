import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';


    function SigninScreen(props) {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const userSignin = useSelector(state=>state.userSignin);
        const {loading,userInfo,error} = userSignin;
        const dispatch = useDispatch();

        useEffect(() => {
           
            if(userInfo){
                props.history.push("/orderplaced");
            }
            return () => {

            };
        }, [userInfo]);  //if userInfo state changes then the code runs

        
        const submitHandler = (e) =>{
            e.preventDefault();
            dispatch(signin(email,password));
        }

        return <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h3>Sign-In</h3>
                    </li>
                    <li>
                       {loading && <div>Loading...</div>} 
                       {error && <div>{error}</div>} 
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
                        <button type="submit" className="button primary">SignIn</button>
                    </li>
                    <li>
                        New to Big Basket?
                    </li>
                    <li>
                        <Link to ="/register" className="button secondary text-centre">Create your big basket account</Link>
                    </li>
                </ul>
            </form>
        </div>
    }
export default SigninScreen;

