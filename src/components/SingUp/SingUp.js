import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './SingUp.css'

const SingUp = () => {
    const [error, setError] = useState(null);

    const {createUser} = useContext(AuthContext);

    const handelSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password.length < 6){
            setError('Password must be 6 characters long');
            return;
        }
        if(password !== confirm){
            setError('Your Password did not match');
            return;
        }

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handelSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="Confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sig Up" />
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SingUp;