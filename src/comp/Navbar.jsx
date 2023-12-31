import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid btn2">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact us</a>
                            </li>
                            
                        </ul>
                        <div className='btn1'>
                        <button type="button" class="btn btn-primary">Login</button>
                        <button type="button" class="btn btn-primary">Signup</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar