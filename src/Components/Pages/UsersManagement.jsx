import React from 'react';
import Base from "../General/Base";
import AddUser from "../Elements/AddUser";

const UsersManagement = () => {
    // @ts-ignore
    // @ts-ignore
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
                                        <button className="btn btn-info btn-block waves-effect waves-light mb-1"
                                                data-toggle="modal" data-target=".AddUserModal">
                                            <i className="fa fa-plus-circle"></i>
                                            <span>Ajouter</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                        <table id="datatable-buttons"
                                               className="table table-striped table-bordered dt-responsive nowrap tableZS">
                                            <thead>
                                            <tr>
                                                <th>Nom</th>
                                                <th>Pseudo</th>
                                                <th>E-mail</th>
                                                <th>Ajouté le</th>
                                                <th>Rôle</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>


                                            <tbody>
                                            <tr>
                                                <td className="pt-4">Zabra</td>
                                                <td className="pt-4">Enygeek</td>
                                                <td className="pt-4">k.jeanjaures@smm.com</td>
                                                <td className="pt-4">2021/01/25</td>
                                                <td className="pt-4"><span
                                                    className="badge badge-dark font-size-12">Administrateurs</span>
                                                </td>
                                                <td className="pt-4">
                                                    <button type="button"
                                                            className="btn btn-outline-warning btn-sm waves-effect pt-1"
                                                            data-dismiss="modal" data-toggle="modal"
                                                            data-target=".bs-example-modal-lg"
                                                            title="Modifier le #tag">
                                                        <i className={"dripicons-pencil mr-2"}></i>Modifier
                                                    </button>
                                                    <button type="button"
                                                            className="btn btn-danger btn-sm waves-effect pt-1 ml-2"
                                                            id="sa-params">
                                                        <i className={"dripicons-trash mr-2"}></i>
                                                        Supprimer
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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
                <footer className="footer">
                    <div className="container-fluid text-center">
                        <p><span className="text-center">Copyright ©
                    <a href="src/Components#" className="f1-s-1 cl10 hov-link1">TodoZS</a>
                    <i className="mdi mdi-heart text-danger"></i>
                            <script>
                        document.write(new Date().getFullYear());
                    </script>

                    - Tout droits reservés | Par
                    <a href="src/Components" target="_blank" className="">Serou & Zabra</a>

                    </span>
                        </p>
                    </div>
                </footer>


                {/* ==========================
                            MODAL
                =============================== */}
                <AddUser />

            </div>

        </>
    )
}

export default UsersManagement;