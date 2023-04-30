import React from 'react';

const UserList = () => {
    return (
        <>
            {/* Liste des utilisateurs */}
            <div className="col-7">
                <div className="card">
                    <div className="card-body">
                        <div className={"font-size-16 pl-1 mb-3"}>
                            <i className={"dripicons-user-group mr-2"}></i>
                            <span>Liste des utilisateurs</span>
                        </div>

                        <table id="datatable-buttons"
                               className="table table-striped table-bordered dt-responsive nowrap tableZS">
                            <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Pseudo</th>
                                <th>E-mail</th>
                                <th>Action</th>
                            </tr>
                            </thead>


                            <tbody>
                                <tr>
                                    <td className="pt-4">Zabra</td>
                                    <td className="pt-4">Enygeek</td>
                                    <td className="pt-4">z@smm.com</td>
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
        </>
    )
}

export default UserList;