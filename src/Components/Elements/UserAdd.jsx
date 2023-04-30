import React from 'react';

const UserAdd = () => {
    return (
        <>
            {/* Form - Ajouter un utilisateur */}
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                        <form className="needs-validation" noValidate>

                            <div className="col-md-12">

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
                                                <i className="dripicons-trash font-size-14"></i>
                                            </button>

                                            <button className="btn btn-success btn-sm font-size-16 ml-2"
                                                    type="submit" data-toggle="tooltip"
                                                    data-placement="top"
                                                    data-original-title="Enregistrer la catégorie">
                                                <i className="mdi mdi-check-underline mr-2"></i>
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
            {/* end col */}
        </>
    )
}

export default UserAdd;