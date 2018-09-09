import React, { component } from 'react';
import {Link} from 'react-router';
import IF from './../IF.svg';

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light white lighten-1 .z-depth-1-half">
    <Link to="/" ><a className="navbar-brand" href="#">
      <img src={IF} width="60" alt="" />
    </a></Link>
    <h4><Link to="/" ><a className="navbar-brand" href="#">FECIPAN 2018</a></Link></h4>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="basicExampleNav">

        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/" ><a className="nav-link" href="#">Home
                    <span className="sr-only">(current)</span>
                </a></Link>
            </li>
            <li className="nav-item">
                <Link to="/Sobre" ><a className="nav-link" href="#">Sobre</a></Link>
            </li>
            <li className="nav-item">
                <Link to="/votacao" ><a className="nav-link" href="#">Votação</a></Link>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Feiras Passadas</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/" ><a className="dropdown-item" href="#">2018</a></Link>
                    <Link to="/" ><a className="dropdown-item" href="#">2017</a></Link>
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
