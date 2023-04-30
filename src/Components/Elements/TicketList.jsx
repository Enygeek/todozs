import React from 'react';


/**
 * @Description
 *     Composant retournant la liste des tags sous forme de tableau.
 * */
const TicketList = () => {
    return (
        <>
            {/* Liste des utilisateurs */}
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className={"font-size-16 text-center pl-1 mb-3"}>
                            <i className={"dripicons-tags mr-2"}></i>
                            <span className={"text-uppercase"}>Liste des tickets</span>
                        </div>

                        <table id="datatable-buttons"
                               className="table table-striped table-bordered dt-responsive nowrap tableZS">
                            <thead>
                            <tr>
                                <th>N°</th>
                                <th>Sujet</th>
                                <th>Description</th>
                                <th>Crée le</th>
                                <th>Assigné à</th>
                                <th>Statut</th>
                                <th>Action</th>
                            </tr>
                            </thead>


                            <tbody>
                            <tr>
                                <td className="pt-4">1</td>
                                <td className="pt-4">Management</td>
                                <td className="pt-4">Tag relative au managemnt</td>
                                <td className="pt-4">30.04.2023</td>
                                <td className="pt-4">Enygeek</td>
                                <td className="pt-4"><span className={"badge badge-warning font-size-12"}>En cours</span></td>
                                <td className="pt-4">
                                    <button type="button"
                                            className="btn btn-outline-warning btn-sm waves-effect pt-1"
                                            data-dismiss="modal" data-toggle="modal"
                                            data-target=".bs-example-modal-lg"
                                            title="Modifier le #tag">
                                        <i className={"dripicons-pencil mr-2"}></i>
                                    </button>
                                    <button type="button"
                                            className="btn btn-danger btn-sm waves-effect pt-1 ml-2"
                                            id="sa-params">
                                        <i className={"dripicons-trash mr-2"}></i>
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

export default TicketList;