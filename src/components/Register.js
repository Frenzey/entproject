import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../components/assets/bootstrap/css/bootstrap.min.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    onChange(e) {
    }

    onSubmit(e) {
    }

    render() {

        return(
            <div className="container mt-6">
        <div className="card shadow-lg o-hidden border-0 my-5">
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-flex">
                        <div className="flex-grow-1 bg-register-image">
                        <img src="https://ak4.picdn.net/shutterstock/videos/1009870424/thumb/1.jpg"/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h4 className="text-dark mb-4">Creer un compte</h4>
                            </div>
                            <form className="user" noValidate onSubmit={this.onSubmit}>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" id="exampleNomComplet" placeholder="Nom complet" name="full_name"
                                    value={this.state.full_name}
                                    onChange={this.onChange}/></div>
                                    <div className="col-sm-6"><input className="form-control form-control-user" type="text" id="exampleUsername" placeholder="Nom d'utilisateur" name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}/></div>
                                </div>
                                <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Adresse Email" name="email"
                                value={this.state.email}
                                onChange={this.onChange}/></div>
                                <div class="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Mot de Passe" name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}/></div>
                                </div><button className="btn btn-primary btn-block text-white btn-user" type="submit">S'enregistrer</button>
                                <hr></hr>
                            </form>
                            <div className="text-center"><p>Vous avez déjà un compte? <br/>
                                            <Link to="/login" className="small">
                                                Connectez vous!
                                            </Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default Register
