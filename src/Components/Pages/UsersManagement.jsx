import React from 'react';
import Base from "../General/Base";
import Footer from "../General/Footer";
import UserList from "../Elements/UsersList";
import UserAdd from "../Elements/UserAdd";

const UsersManagement = () => {
    return (
        <>
            <Base />
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">Gestion des utilisateurs</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a
                                                href="javascript: void(0);">Administration</a></li>
                                            <li className="breadcrumb-item active">#UTILISATEURS</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* end page title */}

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <hr/>
                                        <h4 className="header-title">Liste des <span
                                            className="text-dark font-weight-bold">Utilisateurs</span></h4>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                        <div className="row">
                            <UserAdd/>
                            <UserList />
                            {/* end col */}
                        </div>
                        {/* end row */}

                    </div>
                    {/*}container-fluid */}
                </div>
                {/* End Page-content */}

                {/* ==========================
                              FOOTER
                =============================== */}
                <Footer />

                {/* ==========================
                            MODAL
                =============================== */}

            </div>

        </>
    )
}

export default UsersManagement;