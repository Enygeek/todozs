import React from 'react';
import Base from "../General/Base";
import Footer from "../General/Footer";
import Ticket from "../Elements/Ticket";
import UserStAdd from "../Elements/UserStAdd";
import {Link} from "react-router-dom";

/**
 * @Description
 *     Composant retournant la page d'accueil présentée sous forme d'un tableau de bord.
 * */
const Home = () => {
    return (
        <>
            <Base />

            {/* Start right Content here */}
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">Tableau de bord</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Accueil</a></li>
                                            <li className="breadcrumb-item active">Tableau de bord</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* end page title */}

                        <div className="row">
                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body text-center">
                                                <h5 className="font-size-14 text-uppercase">Tickets</h5>
                                            </div>
                                        </div>
                                        <h2 className="m-0 align-self-center text-center text-danger">183</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body text-center">
                                                <h5 className="font-size-14 text-uppercase">Utilisateurs</h5>
                                            </div>
                                        </div>
                                        <h3 className="m-0 align-self-center text-center text-success">08</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="font-size-14 text-center text-uppercase">Tags</h5>
                                            </div>
                                        </div>
                                        <h3 className="m-0 align-self-center text-center text-warning">03</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="media">
                                            <div className="media-body">
                                                <h5 className="font-size-14 text-center text-uppercase">Commentaires</h5>
                                            </div>
                                        </div>
                                        <h3 className="m-0 align-self-center text-center text-info">28</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                        {/* Tickets viz */}
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-body">

                                        <Link to={"/TicketsManagement"} type="button" className="btn btn-primary btn-sm float-right waves-effect waves-light">
                                            <i className="mdi mdi-plus-circle"></i>
                                        </Link>

                                        <h4 className="header-title">Visualisatoin des tickets</h4>
                                        <p className="card-title-desc"></p>


                                        <div className="row">
                                            <div className="col-sm-2">
                                                <div className="nav flex-column nav-pills text-center" role="tablist"
                                                     aria-orientation="vertical">
                                                    <a className="nav-link active mb-2" id="v-pills-home-tab"
                                                       data-toggle="pill" href="#v-pills-home" role="tab"
                                                       aria-controls="v-pills-home" aria-selected="true">
                                                        <i className="dripicons-ticket  font-size-18 d-block my-1"></i> Tickets
                                                    </a>
                                                    <a className="nav-link mb-2" id="v-pills-profile-tab"
                                                       data-toggle="pill" href="#v-pills-profile" role="tab"
                                                       aria-controls="v-pills-profile" aria-selected="false">
                                                        <i className="dripicons-user font-size-18 d-block my-1"></i> Validés
                                                    </a>
                                                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill"
                                                       href="#v-pills-messages" role="tab"
                                                       aria-controls="v-pills-messages" aria-selected="false">
                                                        <i className="dripicons-document-delete font-size-18 d-block my-1"></i>Annuler
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-sm-10">
                                                <div className="tab-content mt-4 mt-sm-0">
                                                    <div className="tab-pane fade show active" id="v-pills-home"
                                                         role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                        {/* Tickets */}
                                                        <Ticket/>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                                         aria-labelledby="v-pills-profile-tab">

                                                        {/*
                                                        { ticket.statut == "Terminé" ? (
                                                            <Ticket />
                                                        ) : null}
                                                        */}

                                                        <p>Ticket 2</p>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                                         aria-labelledby="v-pills-messages-tab">
                                                        <p>Ticket 3</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4">
                                <div className={"card"}>
                                    <div className={"card-body"}>
                                        <button type="button" className="btn btn-success btn-sm float-right waves-effect waves-light" data-toggle="modal" data-target=".AddUserModal">
                                            <i className="mdi mdi-plus-circle"></i>
                                        </button>
                                        <h4 className="header-title text-uppercase">
                                            <i className="fa fa-user mr-2"></i>
                                            Support technique
                                        </h4>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <table
                                                className="table table-striped table-hover table-borderless table-vcenter font-size-sm mb-0">
                                                <thead>
                                                <tr className="text-uppercase">
                                                    <th className="font-w700">ID</th>
                                                    <th className="font-w700">Name</th>
                                                    <th className="font-w700 text-center">Pseudo</th>
                                                    <th className="font-w700 text-center">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span className="font-w600">#1</span>
                                                        </td>
                                                        <td className="font-w600">
                                                            Lori Grant
                                                        </td>
                                                        <td className="d-none d-sm-table-cell text-center text-info">
                                                            Codeur
                                                        </td>
                                                        <td className="text-center">
                                                            <span className={"text-warning"} data-toggle="tooltip"
                                                               data-placement="left" title="Edit">
                                                                <i className="fa fa-fw fa-pencil-alt"/>
                                                            </span>
                                                            <span className={"text-danger ml-2"} data-toggle="tooltip"
                                                                  data-placement="left" title="Edit">
                                                                <i className="fa fa-trash-alt fa-pencil-alt"/>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end row */}

                    </div> {/* container-fluid */}
                </div>
                {/* End Page-content */}

                {/* ==========================
                            FOOTER
                =============================== */}
                <Footer/>


                {/* ==========================
                            MODAL
                =============================== */}
                <UserStAdd />



            </div>
            {/* end main content */}
        </>
    )
}

export default Home;