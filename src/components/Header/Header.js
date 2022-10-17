import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../contexts/UserContext';
import './Header.css'


const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
               
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/manage">Manage Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid?
                    <button className='btn-logout' onClick={logOut}>Log Out</button>
                    :
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                    </>
                }
                
            </div>
        </nav>
    );
};

export default Header;