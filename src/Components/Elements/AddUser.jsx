import React from 'react';

const AddUser = () => {
    return (
        <>
            {/* Un utilisateur */}
            <div className="modal fade AddUserModal" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center mt-0" id="myLargeModalLabel">
                                <i className="fa fa-plus-circle text-primary mr-1"></i>
                                <span>Ajouter un nouvel [ <span className="text-primary">Utilisateur</span> ]</span>
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12">
                                    <div className="card-body bg-img bg-img-01">

                                        <form className="needs-validation" noValidate>

                                            <div className="col-md-12">

                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">

                                                            <div className="col-md-12 mb-2">
                                                                <label htmlFor="subject">Nom</label>
                                                                <input type="text" id="subject" name="" className="form-control" placeholder="Nom de l'utilisateur"
                                                                       required/>
                                                            </div>

                                                            <div className="col-md-12 mb-2">
                                                                <label htmlFor="subject">Pseudo</label>
                                                                <input type="text" id="subject" name="" className="form-control" placeholder="Pseudonyme"
                                                                       required/>
                                                            </div>

                                                            <div className="col-md-12 mb-2">
                                                                <label htmlFor="subject">Email</label>
                                                                <input type="email" id="subject" name="" className="form-control" placeholder="...@todozs.com"
                                                                       required/>
                                                            </div>

                                                            <div className="col-md-12 mb-3">
                                                                <label htmlFor="">Rôle</label>
                                                                <select className="custom-select" required>
                                                                    <option value="" disabled>Choisir un exécutant</option>
                                                                    <option value="1">Support technique</option>
                                                                    <option value="2">Simple</option>
                                                                </select>
                                                                <div className="invalid-feedback">Example invalid custom
                                                                    select feedback
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="card">
                                                        <div className="card-body text-center">

                                                            <button className="btn btn-danger btn-sm font-size-16"
                                                                    type="reset" data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    data-original-title="Annuler">
                                                                <span></span>
                                                                <i className="mdi mdi-delete-outline"></i>
                                                            </button>

                                                            <button className="btn btn-primary btn-sm font-size-16 ml-2"
                                                                    type="submit" data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    data-original-title="Enregistrer la catégorie">
                                                                <i className="mdi mdi-send-check mr-1"></i>
                                                                <span className="mr-1">| Enregistrer</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddUser;