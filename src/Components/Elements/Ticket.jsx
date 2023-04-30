import React from 'react';

const Ticket = () => {
    return (
        <>
            {/* Un ticket */}
            <div className="card">
                <div className={"card-header"}>
                    {/* Statut */}
                    <span className="float-right"> <i className={"dripicons-calendar mr-2 mt-2"}></i> 30.04.2023</span>
                    {/* Checkbox & Sujet */}
                    <div className="form-check">
                        <input className="form-check-input mr-2" type="checkbox" value="" id="defaultCheck2"/>
                        <label className="text-muted text-uppercase font-weight-bold ml-1" htmlFor="defaultCheck2">
                            Sujet du ticket
                        </label>
                    </div>
                </div>
                
                <div className={"card-body p-0"}>
                    <div className="media p-3">
                        <div className="media-body">
                            {/* Description du ticket */}
                            <p className="text-muted font-size-14">Description ................................................................................................................................</p>
                        </div>
                        <div className="align-self-center"></div>
                    </div>
                </div>

                <div className="card-footer">
                    {/* Statut */}
                    <span className="badge badge-warning font-size-12 float-right">
                                en attente
                            </span>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <i className={"dripicons-user"}></i>
                            <span>
                                <span className={"font-weight-bold ml-1"}> à
                                </span> Ange-Maurel
                            </span>
                        </div>
                    </div>
                </div>

                {/* Accordion - Comment*/}
                <div id="accordion">
                    <div className="card mb-0">
                        <div className="card-header" id="headingOne">
                            <h5 className="m-0 font-size-14 text-center">
                                <a data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseOne" aria-expanded="true"
                                   aria-controls="collapseOne" className="text-dark">
                                    <i className={"dripicons-message mt-2 mr-2"}></i>
                                    Commentaires
                                </a>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show"
                             aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                Comment.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Ticket;