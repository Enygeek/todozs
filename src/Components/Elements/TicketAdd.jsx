import React from 'react';

const TicketAdd = () => {
    return (
        <>
            {/* Form - Ajouter un utilisateur */}
            <div className="col-5">
                <div className="card">
                    <div className="card-body">
                        <div className={"font-size-16 text-center pl-1 mb-3"}>
                            <i className={"mdi mdi-plus-circle-outline mr-2"}></i>
                            <span className={"text-uppercase"}>Ajouter un ticket</span>
                        </div>


                        <form className="needs-validation" noValidate>

                            <div className="col-md-12">
                                <div className="row">

                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="subject">Sujet</label>
                                        <input type="text" id="subject" name="" className="form-control" placeholder="Nouveau sujet"
                                               required/>
                                    </div>

                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" className="form-control" rows={2}
                                                  required/>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="">Assignée à </label>
                                        <select className="custom-select" required>
                                            <option value="" disabled>Choisir un exécutant</option>
                                            <option value="1">Ange-Maurel Serou</option>
                                            <option value="2">Enoch Zabra</option>
                                        </select>
                                        <div className="invalid-feedback">Example invalid custom
                                            select feedback
                                        </div>
                                    </div>

                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="tags">Tags</label>
                                        <select className="custom-select">
                                            <option value="" disabled>Coisr un tags</option>
                                            <option value="1">Opération</option>
                                            <option value="2">Facture</option>
                                        </select>
                                        <div className="invalid-feedback">Example invalid custom
                                            select feedback
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
            {/* end col */}
        </>
    )
}

export default TicketAdd;