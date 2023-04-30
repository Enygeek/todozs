import React from 'react';
// @ts-ignore
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* LOGO */}
                        <div className="navbar-brand-box bg-white">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/icons/" alt="" height="50"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/" alt="" height="30"/>
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/icons/" alt="" height="50"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/" alt="" height="30"/>
                                </span>
                            </a>
                        </div>

                        {/*
                        <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect"
                                id="vertical-menu-btn">
                            <i className="mdi mdi-backburger"></i>
                        </button>
                        */}

                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block d-lg-none ml-2">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-search-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="mdi mdi-magnify"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                 aria-labelledby="page-header-search-dropdown">

                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..."
                                                   aria-label="Recipient's username"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ml-1">
                            <button type="button" className="btn header-item noti-icon waves-effect"
                                    data-toggle="fullscreen">
                                <i className="mdi mdi-fullscreen"></i>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect"
                                    id="page-header-user-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="../assets/images/users/avatar-1.jpg"  alt="Header Avatar"/>
                                <span className="d-none d-sm-inline-block ml-1">Enoch</span>
                                <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                {/* Porfil de l'utilisateur */}
                                <Link className="dropdown-item" to="/UserProfil">
                                    <i className="mdi mdi-account font-size-16 align-middle mr-1"></i> Profil
                                </Link>

                                <div className="dropdown-divider"></div>

                                {/* Déconnecter l'utilisateur */}
                                <Link className="dropdown-item text-danger" to="/LoginForm">
                                    <i className="mdi mdi-logout font-size-16 align-middle mr-1"></i> Déconnexion
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;