import React from 'react';
import GetElements  from '../../assets/scripts/navbar_items';

function Nav() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {GetElements().map((element) => (
                                <li className="nav-item active">
                                    <a className="nav-link" href={element.link}>{element.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Nav;