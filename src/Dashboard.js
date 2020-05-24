import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/css/style.css'
import {Navbar, Nav} from "react-bootstrap";
import app from "./base";

class Dashboard extends Component {

  constructor() {
    super()
    this.state = {
        errors: {}
    }
}


componentDidMount() {
}

    render() {
      return(
      /*<div className="card text-center mt-5">
        <div class="card-header h2">
            Mon appli ENT
          </div>
          <div class="card-body">
          <h5 class="card-title">Bienvenu sur l'application test</h5>
          <p class="card-text">Cette application n'utilise pas de serveur backend, elle est entièrement générée en ReactJS</p>
          <Link to="/login" class="btn btn-primary" >Connectez vous ></Link>
        </div>
        </div> */
        /*  <div>
        <Sidebar/>
        <Content/>
            </div>*/
        <div>
          <Navbar bg="white" expand="lg" variant="light" className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient collapsed">
              <div className="container">
              <Navbar.Brand className="navbar-brand logo style">
                  Projet ENT
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="nav navbar-nav ml-auto">
                      <Nav.Link className="nav-item nav-link active" href="#info">Informations Véhicules</Nav.Link>
                      <Nav.Link className="nav-item nav-link active" href="#emis">Emissions</Nav.Link>
                      <Nav.Link className="nav-item nav-link active" href="#carb">Carburant</Nav.Link>
                      <Nav.Link className="nav-item nav-link active" href="#cons">Consommations</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              </div>
              <button onClick={() => app.auth().signOut()}>Sign out</button>
          </Navbar>
            {/*
            <div className="infocont">
            <div className="elm info">
            <h1 id="info">Informations véhicules</h1>
                <iframe src="http://entbiapp.herokuapp.com/public/dashboard/c459150a-afd3-4706-80d0-17178119554c"
                        frameBorder="0" width="100%" height="600" allowTransparency></iframe>
            </div>
            <div className="elm info">
            <h1 id="emis">Emissions</h1>
                <iframe src="http://entbiapp.herokuapp.com/public/dashboard/03cfce31-85a5-40cc-8615-006eddf59a56"
                        frameBorder="0" width="100%" height="1000" allowTransparency></iframe>
            </div>
            <div className="elm info">
                <h1 id="carb">Carburant</h1>
                <iframe src="http://entbiapp.herokuapp.com/public/dashboard/2aaaed13-aa7d-4f0b-a83b-e42f3f83dd14"
                        frameBorder="0" width="100%" height="1000" allowTransparency></iframe>
            </div>
            <div className="elm info">
                <h1 id="cons">Consommations</h1>
                <iframe src="http://entbiapp.herokuapp.com/public/dashboard/0b57ac3e-0247-43af-93c2-30b765d95b8f"
                        frameBorder="0" width="100%" height="1000" allowTransparency></iframe>
            </div>
            </div>
*/}

        </div>
      )

  }
}

export default Dashboard;
