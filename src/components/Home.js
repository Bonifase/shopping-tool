import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
              <div className="top-container">
                <h1>Shopping Tool</h1>
                <p>Allows You to manage your shopping list</p>
                </div>

                <header className="header" id="myHeader">
                    <nav className="nav">
                        <ul className="nav-items">
                            <li className="nan-item">Home</li>
                            <li className="nan-item">My list</li>
                            <li className="nan-item">Users</li>
                            <li className="nan-item">Create cart</li>
                        </ul>
                        <ul className="auth-items">
                            <li>Login</li>
                            <li>Register</li>
                        </ul>
                    </nav>
                </header>

                <section className="content">
                  My list
                </section>  
            </div>
        );
    }
}

export default Home;