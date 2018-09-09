import React, { component } from 'react';
import logo from './../logo.svg';
const Footer = () => {
  return (
    <footer className="page-footer font-small green pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Instituto Federal de Educação, Ciência e Tecnologia</h5>
              <p>Obrigado por participar! </p>
                <div class="container">
                  <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                      <a class="btn-floating btn-fb mx-2">
                        <i class="fa fa-facebook"> </i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="btn-floating btn-tw mx-2">
                        <i class="fa fa-twitter"> </i>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 classNameFfo="text-uppercase">Parcerias</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">IF Campus Corumba</a>
                  </li>
                  <li>
                    <a href="#!">Prefeitura Municipal de Corumbá</a>
                  </li>
                  <li>
                    <a href="#!">Governo do Estado</a>
                  </li>
                  <li>
                    <a href="#!">TV Globinho</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Desenvolvimento</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Gabriel Kukiel</a>
                  </li>
                  <li>
                    <a href="#!">Luiz Felipe Jimenez</a>
                  </li>
                </ul>
              </div>
          </div>

        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright: <a href="https://www.facebook.com/gkm2806" target="_blank"> @gkm2806</a>
          <br></br>
          Powered by ReactJs <img src={logo} className="App-logo" alt="logo" style={{width: 50+"px"}}/>

        </div>


    </footer>
  );
};
export default Footer;
