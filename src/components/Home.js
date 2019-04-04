import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
              <div class="top-container">
                <h1>Shopping Tool</h1>
                <p>Allows You to manage your shopping list</p>
                </div>

                <header class="header" id="myHeader">
                    <nav className="nav">
                        <ul className="nav-items">
                            <li className="nan-item">Home</li>
                            <li className="nan-item">My list</li>
                            <li className="nan-item">Users</li>
                            <li className="nan-item">Create cart</li>
                        </ul>
                        <ul className="auth-items">
                            <li className="account">Login</li>
                            <li className="account">Register</li>
                        </ul>
                    </nav>
                </header>

                <section class="content">
                  My list
                </section>  
            </div>
        );
    }
}

export default Home;