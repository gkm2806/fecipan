import React from 'react';
import {Link} from 'react-router';
import IF from './../IF.svg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light white lighten-1 .z-depth-1-half">
        <Link to="/" className="navbar-brand">
          <img src={IF} width="60" alt="" />
        </Link>
        <h4><Link to="/" className="navbar-brand" >FECIPAN 2018</Link></h4>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="basicExampleNav">

            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" ><a className="nav-link" >Home
                        <span className="sr-only">(current)</span>
                    </a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/Sobre" ><a className="nav-link" >Sobre</a></Link>
                </li>
                <li className="nav-item">
                    <Link to="/votacao" ><a className="nav-link" >Votação</a></Link>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Feiras Passadas</a>
                    <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="/a2017" ><a className="dropdown-item" >2017</a></Link>
                        <Link to="/a2016" ><a className="dropdown-item" >2016</a></Link>
                    </div>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Login</a>
                      <div className="dropdown-menu dropdown-primary" id="loginMenu" aria-labelledby="navbarDropdownMenuLink">
                        <h1>Welcome to My Awesome App</h1>
                        <div id="firebaseui-auth-container" className="w-25 p-3"></div>
                        <div id="loader">Loading...</div>
                      </div>
                </li>

            </ul>

            <form className="form-inline">
                <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" disabled placeholder="Search" aria-label="Search" />
                </div>
            </form>
        </div>

    </nav>
  );
};

export default NavBar;
